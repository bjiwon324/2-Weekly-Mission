import Image from 'next/image';
import styled from 'styled-components';

const EditBox = styled.section`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
`;

const EditButton = styled.button`
  display: flex;
  gap: 0.25rem;
  color: var(--linkbrary-gray-60, #9fa6b2);
  font-size: 14px;
  font-weight: 600;
  border: none;
  background: none;
  cursor: pointer;
`;

interface Props {
  handleModal: any;
}

export default function EditList({ handleModal }: Props) {
  return (
    <EditBox>
      <EditButton id="goshare" onClick={handleModal}>
        <Image src="share.svg" width="18" height="19" alt="공유하기" />
        공유
      </EditButton>
      <EditButton id="changeName" onClick={handleModal}>
        <Image src="pen.svg" width="18" height="19" alt="이름 변경" />
        이름 변경
      </EditButton>
      <EditButton id="deleteFolder" onClick={handleModal}>
        <Image src="trashCan.svg" width="18" height="19" alt="삭제하기" />
        삭제
      </EditButton>
    </EditBox>
  );
}
