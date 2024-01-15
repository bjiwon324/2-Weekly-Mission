import S from '@/styles/Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const handleLoginClick = () => location.assign('signin.html');

interface Prop {
  userData?: { email?: string; profileImageSource?: string };
  isShared?: boolean;
}

const NavStyled = styled.nav<{ isShared?: boolean }>`
  background-color: var(--linkbrary-bg);
  position: ${({ isShared }) => (isShared ? 'sticky' : 'static')};
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
`;

const User = ({ userData }: Prop) => {
  return (
    <article className={S.profile}>
      <div className={S.profileImg}>
        <Image
          src={userData?.profileImageSource || '!img.svg'}
          alt="프로필 이미지"
          fill
        />
      </div>
      <p>{userData?.email}</p>
    </article>
  );
};

export default function Nav({ userData, isShared = false }: Prop) {
  return (
    <NavStyled isShared={isShared}>
      <div className={S.navBar}>
        <Link id="logo" className={S.logo} href="/">
          <Image fill src="logo.svg" alt="LinkBrary logo" />
        </Link>
        {userData ? (
          <User userData={userData} />
        ) : (
          <button onClick={handleLoginClick} className={S.use_site} id="signin">
            로그인
          </button>
        )}
      </div>
    </NavStyled>
  );
}
