import React, { MouseEvent, MouseEventHandler } from 'react';
import styled from 'styled-components';
import ModalContainer from './ModalContainer';
import { MoreInfo } from './DeleteFolderModal';
import { ModalButton } from './EditModal';

const AddFolderList = styled.ul`
  list-style: none;
  gap: 0.25rem;
  width: 100%;
`;

const AddThisFolder = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  color: var(--Linkbrary-gray100);
  font-weight: 400;

  > span {
    margin: 0;
    color: var(--Linkbrary-gray60);
    font-size: 0.875rem;
  }

  &:hover {
    color: var(--linkbrary-primary-color);
    border-radius: 0.5rem;
    background: var(--linkbrary-bg);
  }
`;

interface Props {
  url?: string;
  handleModal?: (e: MouseEvent<HTMLElement>) => void;
  buttons?: Btn[];
}

interface Btn {
  id: number;
  name: string;
  link: { count: number };
}

export default function AddLinkModal({
  url = '링크주소',
  buttons,
  handleModal,
}: Props) {
  return (
    <ModalContainer handleModal={handleModal}>
      폴더에 추가
      <MoreInfo>{url}</MoreInfo>
      <AddFolderList>
        {buttons?.map((btn) => (
          <AddThisFolder key={btn.id}>
            {btn.name} <span>{btn.link.count}개 링크</span>
          </AddThisFolder>
        ))}
      </AddFolderList>
      <ModalButton>추가하기</ModalButton>
    </ModalContainer>
  );
}
