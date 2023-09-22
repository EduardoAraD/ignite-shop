import { useMemo, useState } from "react";
import axios from "axios";
import ReactModal from "react-modal";
import Image from "next/image";

import { useShopping } from "../../hooks/useShopping";

import { ProductCard } from "../ProductCard";

import { Button, ButtonClose, Info, ListItems, ModalContainer } from "./styles";
import xImg from '../../assets/x.svg';

interface ModalProps {
  isOpen: boolean
  onClose:() => void
}

export function Modal({ isOpen, onClose }: ModalProps) {
  const { listProduct, removeProductByList, clearShopList } = useShopping();

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  function handleRemoveItem(idProduct: string) {
    removeProductByList(idProduct)
  }

  async function handleShopListProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const priceIds = listProduct.map(product => {
        return product.priceId
      })
      const response = await axios.post('/api/checkout', {
        priceIds
      });

      const { checkoutUrl } = response.data

      clearShopList()

      window.location.href = checkoutUrl
    } catch (error) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

      setIsCreatingCheckoutSession(false);
      alert('Falha ao redirecionar ao checkout')
    } 
  }

  const priceAllFormated = useMemo(() => {
    const priceAll = listProduct.reduce(
      (acc, product) => {
        return acc + product.price
      },
      0
    )

    return new Intl.NumberFormat('pt-Br', {
      style: 'currency',
      currency: 'BRL',
    }).format((priceAll) / 100)
  }, [listProduct]);

  const isListEmpty = listProduct.length === 0;
  const disabledButton = isListEmpty || isCreatingCheckoutSession;

  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        content: { width: 480, margin: '0 0 0 auto', top: 0, right: 0, height: '100vh', background: '#202024', border: 'none' },
        overlay: { backgroundColor: '#0005' }
      }}>
      <ModalContainer>
        <ButtonClose type="button" onClick={onClose}>
          <Image {...xImg} alt="" />
        </ButtonClose>
        <h1>Sacola de Compras</h1>
        <ListItems>
          {isListEmpty ? (
            <div className="empty">
              <p>Sem itens na sacola.</p>
            </div>
          ) : (
            listProduct.map(product => (
              <ProductCard
                key={product.id}
                imageUrl={product.imageUrl}
                name={product.name}
                onRemove={() => handleRemoveItem(product.id)}
                price={product.priceFormat}
              />
            ))
          )}
          
        </ListItems>

        <Info>
          <div>
            <span style={{ fontSize: 16 }}>Quantidade</span>
            <span>{listProduct.length} itens</span>
          </div>
          <div>
            <span><strong>Valor total</strong></span>
            <p>{priceAllFormated}</p>
          </div>
        </Info>
        <Button disabled={disabledButton} onClick={handleShopListProduct}>Finalizar compra</Button>
      </ModalContainer>
    </ReactModal>
  )
}
