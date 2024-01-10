import React, { MouseEvent } from 'react';
import DeleteFoderModal from './DeleteFolderModal';

interface Props {
  handleModal?: (e: MouseEvent<HTMLElement>) => void;
  url?: string;
}

export default function DeleteLinkModal({ url, handleModal }: Props) {
  return (
    <DeleteFoderModal url={url} handleModal={handleModal} isDeleteLink={true} />
  );
}
