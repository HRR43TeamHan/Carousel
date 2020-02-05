import React from 'react';
import {
  ModalContainer,
  LModalContainer,
  RModalContainer,
  ModalNavBar,
  CarouselContainer,
  ExitButton
} from '../CSS/modalCSS.js'

const Modal = ({toggleModal}) => {
  return (
    <ModalContainer>
    <ModalNavBar>
        <li>duck</li>
        <li>duck</li>
        <li>duck</li>

        <ExitButton onClick={toggleModal}><i className="fas fa-times"></i></ExitButton>
    </ModalNavBar>
      {/* left container */}
    <CarouselContainer>
      <LModalContainer>

      </LModalContainer>
      <RModalContainer></RModalContainer>
    </CarouselContainer>
    </ModalContainer>
  )
}

export default Modal;