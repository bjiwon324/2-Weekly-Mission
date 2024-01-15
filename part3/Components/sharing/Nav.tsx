import S from '@/styles/Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';

const handleLoginClick = () => location.assign('signin.html');

interface Prop {
  userData: { email: string; profileImageSource: string };
}

const User = ({ userData }: Prop) => {
  return (
    <article className={S.profile}>
      <div className={S.profileImg}>
        <Image src={userData?.profileImageSource} alt="프로필 이미지" fill />
      </div>
      <p>{userData.email}</p>
    </article>
  );
};

export default function Nav({ userData }: Prop) {
  return (
    <nav className={S.nav}>
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
    </nav>
  );
}
