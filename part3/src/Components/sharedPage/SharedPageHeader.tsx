import React from 'react';
import '../../css/Header.css';

interface Props {
  userInfo: {
    owner: { profileImageSource: string; name: string };
    name: string;
  };
}

export default function SharedPageHeader({ userInfo }: Props) {
  return (
    userInfo && (
      <header className="memHeader">
        <img className="headerImg" src={userInfo.owner.profileImageSource} />
        <p className="userName">{userInfo.owner.name}</p>
        <h1 className="siteName">{userInfo.name}</h1>
      </header>
    )
  );
}
