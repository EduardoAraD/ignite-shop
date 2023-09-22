import { useState } from "react";
import Image from "next/image";

import { useShopping } from "../../hooks/useShopping";

import { Modal } from "../Modal";

import { ButtonShop, HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'
import shopImg from '../../assets/shop.svg';

export function Header() {
  const { listProduct } = useShopping();

  const [openModal, setOpenModal] = useState(false)

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  const numberItemsShopping = listProduct.length;

  return (
    <HeaderContainer>
      <Image {...logoImg} alt="" />
      <ButtonShop onClick={handleOpenModal}>
        <Image {...shopImg} alt="" />
        {numberItemsShopping > 0 && (
          <span>{numberItemsShopping}</span>
        )}
      </ButtonShop>
      <Modal
        isOpen={openModal}
        onClose={handleCloseModal}
      />
    </HeaderContainer>
  )
}
