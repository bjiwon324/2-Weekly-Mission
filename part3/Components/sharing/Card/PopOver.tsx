import React, { MouseEvent } from 'react';
import styled from 'styled-components';

const PopOverBox = styled.ul`
  position: absolute;
  right: -3.2rem;
  top: 70%;

  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
  background-color: var(--linkbrary-white);

  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  z-index: 1;

  > li {
    width: 100%;
  }

  @media screen and (max-width: 1199px) {
    right: 1rem;
  }
`;

const PopOverBtn = styled.button`
  padding: 0.4375rem 0.75rem;
  border: none;
  width: 100%;
  color: var(--gray-light-gray-100);
  font-size: 0.875rem;
  font-weight: 400;
  z-index: 2;

  background-color: var(--linkbrary-white);

  &:hover {
    cursor: pointer;
    background: var(--Linkbrary-gray10, #e7effb);
    color: var(--linkbrary-primary-color);
  }
`;

interface Props {
  handleModal: (e: MouseEvent<HTMLElement>) => void;
  cardId: number;
}

export default function PopOver({ handleModal, cardId }: Props) {
  return (
    <PopOverBox>
      <li>
        <PopOverBtn id={cardId + 'delete'} onClick={handleModal}>
          삭제하기
        </PopOverBtn>
      </li>
      <li>
        <PopOverBtn id={cardId + 'add'} onClick={handleModal}>
          폴더에 추가
        </PopOverBtn>
      </li>
    </PopOverBox>
  );
}
