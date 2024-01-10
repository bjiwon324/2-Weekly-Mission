import React from 'react';
import S from '@/styles/Sheader.module.css';

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
        <img className={S.headerImg} src={userInfo.owner.profileImageSource} />
        <p className={S.userName}>{userInfo.owner.name}</p>
        <h1 className={S.siteName}>{userInfo.name}</h1>
      </header>
    )
  );
}
