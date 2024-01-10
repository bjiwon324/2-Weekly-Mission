import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import ModalContainer from './ModalContainer';
import { Input } from '../../folderPage/HeaderWithInput';
import PrimeryButton from '../SPrimeryButton';

const MdoalInput = styled(Input)`
  width: 100%;
  height: 3.75rem;
  border-radius: 0.5rem;
  padding: 1.125rem 0.9375rem;
`;

export const ModalButton = styled(PrimeryButton)`
  position: static;
  width: 100%;
  padding: 1rem 1.25rem;
  margin: 0;
`;

interface Props {
  handleModal: (e: MouseEvent<HTMLElement>) => void;
  isEditModal?: boolean;
}

export default function EditModal({ handleModal, isEditModal = true }: Props) {
  return (
    <ModalContainer handleModal={handleModal}>
      {isEditModal ? '폴더 이름 변경' : '폴더 추가'}
      <MdoalInput />
      <ModalButton>{isEditModal ? '변경하기' : '추가하기'}</ModalButton>
    </ModalContainer>
  );
}
