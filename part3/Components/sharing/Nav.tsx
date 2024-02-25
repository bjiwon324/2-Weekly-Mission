import S from '@/styles/Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useAuth } from '@/context/AuthProvider';

const handleLoginClick = () => location.assign('signin.html');

interface Prop {
  user?: { email?: string; image_source?: string };
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

const User = ({ user }: Prop) => {
  return (
    <article className={S.profile}>
      <div className={S.profileImg}>
        <Image src={user?.image_source || '!img.svg'} alt="프로필 이미지" width={28} height={28} />
      </div>
      <p>{user?.email}</p>
    </article>
  );
};

export default function Nav({ isShared = false }: Prop) {
  const { user } = useAuth(true);
  console.log(user);
  return (
    <NavStyled isShared={isShared}>
      <div className={S.navBar}>
        <Link id="logo" className={S.logo} href="/">
          <Image fill src="/logo.svg" alt="LinkBrary logo" />
        </Link>
        {user ? (
          <User user={user} />
        ) : (
          <button onClick={handleLoginClick} className={S.use_site} id="signin">
            로그인
          </button>
        )}
      </div>
    </NavStyled>
  );
}
