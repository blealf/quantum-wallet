import React from 'react'
import styled from 'styled-components'

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 97;
  background: none;
  display: flex;

  &:before {
    content: '';
    position: absolute;
    background: grey;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: 98;
  }
`;
const ModalDiv = styled.div`
  position: relative;
  margin: auto;
  box-shadow: 0 0 10px grey;
  min-height: 100px;
  min-width: 100px;
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  vertical-align: middle;
  horizontal-align: middle;
  z-index: 99;
  backdrop-filter: blur;
`;

const Modal = () => {
    return (
      <ModalWrapper onClick={(e) => e.target.style.display = 'none'}>
        <ModalDiv>
          Something here, just look well
        </ModalDiv>
      </ModalWrapper>
    )
}

export default Modal
