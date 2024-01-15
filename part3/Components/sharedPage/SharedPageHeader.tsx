import React from 'react';
import S from '@/styles/Sheader.module.css';
import Image from 'next/image';

interface Props {
  userInfo: {
    owner: { profileImageSource: string; name: string };
    name: string;
  };
}

export default function SharedPageHeader({ userInfo }: Props) {
  return (
    userInfo && (
      <header className={S.memHeader}>
        <Image
          width={60}
          height={60}
          className={S.headerImg}
          src={userInfo.owner.profileImageSource}
          alt="프로필 이미지"
        />

        <p className={S.userName}>{userInfo.owner.name}</p>
        <h1 className={S.siteName}>{userInfo.name}</h1>
      </header>
    )
  );
}
