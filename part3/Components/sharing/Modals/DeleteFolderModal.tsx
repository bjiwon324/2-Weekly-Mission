import React, { MouseEvent, MouseEventHandler } from 'react';
import styled from 'styled-components';
import ModalContainer from './ModalContainer';
import { ModalButton } from './EditModal';

export const MoreInfo = styled.p`
  margin-top: -0.5rem;
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`;

const DelteButton = styled(ModalButton)`
  background: var(--Linkbrary-red);
`;

interface Props {
  name?: string | null;
  url?: string;
  handleModal?: (e: MouseEvent<HTMLElement>) => void;
  isDeleteLink?: boolean;
}

export default function DeleteFoderModal({
  name,
  url = '',
  handleModal,
  isDeleteLink = false,
}: Props) {
  return (
    <ModalContainer handleModal={handleModal}>
      {isDeleteLink ? '링크 삭제' : '폴더 삭제'}
      <MoreInfo>{url || name}</MoreInfo>
      <DelteButton>삭제하기</DelteButton>
    </ModalContainer>
  );
}
