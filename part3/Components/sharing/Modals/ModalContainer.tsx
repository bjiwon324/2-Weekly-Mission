import React, { MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);

  width: 100vw;
  height: 100vw;

  z-index: 2;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  padding: 2.5rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 22.5rem;

  border-radius: 1.5rem;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);

  &:first-child {
    color: var(--Linkbrary-gray100, #373740);
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
`;

const Close = styled.img`
  border: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

interface Props {
  handleModal?: (e: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}

export default function ModalContainer({ children, handleModal }: Props) {
  return (
    <ModalBackground>
      <Modal>
        {children}
        <Close
          src="modalclose.png"
          alt="폴더 이름 변경창 닫기"
          onClick={handleModal}
        />
      </Modal>
    </ModalBackground>
  );
}
