import Image from "next/image";

import { Info, ProductCardContainer } from "./styles";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: string;
  onRemove: () => void;
}

export function ProductCard({ imageUrl, name, onRemove, price }: ProductCardProps) {
  return (
    <ProductCardContainer>
      <div className="img">
        <Image src={imageUrl} alt="" width={94} height={94} />
      </div>
      <Info>
        <p>{name}</p>
        <span>{price}</span>
        <button type="button" onClick={onRemove}>
          Remover
        </button>
      </Info>
    </ProductCardContainer>
  )
}
