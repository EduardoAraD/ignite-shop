import { useMemo } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";
import Stripe from "stripe";

import { stripe } from "../../lib/stripe";

import { useShopping } from "../../hooks/useShopping";

import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    priceFormat: string;
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addProductByList, listProduct } = useShopping()

  const hasItemByShop = useMemo(() => {
    return !!listProduct.find(prod => prod.id === product.id);
  }, [listProduct]);

  function addItemByShopping() {
    addProductByList({
      id: product.id,
      imageUrl: product.imageUrl,
      name: product.name,
      price: product.price,
      priceFormat: product.priceFormat,
      priceId: product.defaultPriceId,
    });
  }

  const disabledButton = hasItemByShop;
  const textButton = hasItemByShop ? 'Item já está na sacola' : 'Colocar na sacola';

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" height={480} width={520} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.priceFormat}</span>
          
          <p>{product.description}</p>

          <button disabled={disabledButton} onClick={addItemByShopping}>
            {textButton}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async() => {
  return {
    paths: [
      { params: { id: 'prod_OfqV2B0f8FbS0i' }}
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async({ params }) => {
  const productId = params ? params.id : '';

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount || 0,
        priceFormat: new Intl.NumberFormat('pt-Br', {
          style: 'currency',
          currency: 'BRL',
        }).format((price.unit_amount || 0) / 100),
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1, // 1hour
  }
}
