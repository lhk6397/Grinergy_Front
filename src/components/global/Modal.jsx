import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: ${(props) => props.theme.font.kr.regular};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  z-index: 1001;
`;

const ModalContent = styled.div`
  width: 50vw;
  background-color: #fff;
`;

const ModalCloseWrapper = styled.div`
  margin-top: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    cursor: pointer;
    color: white;
  }
`;

function Modal({ closeModal, closeModalUntilExpires }) {
  return (
    <Container>
      <ModalBackground />
      <ModalContainer>
        <ModalContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          labore sint impedit, optio mollitia quae soluta possimus itaque
          obcaecati unde expedita laudantium ducimus distinctio quasi rerum
          molestiae velit, quibusdam cum.
        </ModalContent>
        <ModalCloseWrapper>
          <p onClick={closeModalUntilExpires}>오늘 하루 더 이상 보지 않기</p>
          <p onClick={closeModal}>닫기</p>
        </ModalCloseWrapper>
      </ModalContainer>
    </Container>
  );
}

export default Modal;
