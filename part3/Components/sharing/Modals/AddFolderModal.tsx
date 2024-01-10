import React, { MouseEvent } from 'react';
import EditModal from './EditModal';

export default function AddFolderModal({
  handleModal,
}: {
  handleModal: (e: MouseEvent<HTMLElement>) => void;
}) {
  return <EditModal handleModal={handleModal} isEditModal={false}></EditModal>;
}
