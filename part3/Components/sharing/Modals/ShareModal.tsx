import { MouseEvent } from 'react';
import styled from 'styled-components';
import ModalContainer from './ModalContainer';
import { MoreInfo } from './DeleteFolderModal';

const AllSnsbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const SnsBox = styled.button`
  border: none;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.6rem;
  color: var(--Linkbrary-gray100, #373740);
  text-align: center;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 0.9375rem;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 2.625rem;
  height: 2.625rem;

  &.last {
    padding: 0.75rem;
    border-radius: 3rem;
    background: rgba(157, 157, 157, 0.04);
  }
`;

const Imgs = () => {
  //const location = useLocation();

  const handlecopyPage = async () => {
    //await navigator.clipboard.writeText(location.pathname);
  };

  return (
    <AllSnsbox>
      <SnsBox>
        <Logo src="kakao.png" alt="카카오톡 공유 하기" />
        <p>카카오톡</p>
      </SnsBox>
      <SnsBox>
        <Logo src="facebook.png" alt="페이스북 공유 하기" />
        <p>페이스북</p>
      </SnsBox>
      <SnsBox>
        <Logo
          onClick={handlecopyPage}
          src="link.svg"
          alt="링크 복사해서 공유 하기"
          className="last"
        />
        <p>링크 복사</p>
      </SnsBox>
    </AllSnsbox>
  );
};

interface Prop {
  name: string;
  handleModal: (e: MouseEvent<HTMLElement>) => void;
}

export default function ShareModal({ name = '폴더명', handleModal }: Prop) {
  return (
    <ModalContainer handleModal={handleModal}>
      폴더 공유
      <MoreInfo>{name}</MoreInfo>
      <Imgs />
    </ModalContainer>
  );
}
