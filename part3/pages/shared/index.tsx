import Nav from '@/Components/sharing/Nav';
import Footer from '@/Components/sharing/Footer';
import { ChangeEvent, useEffect, useState } from 'react';
import SharedPageHeader from '@/Components/sharedPage/SharedPageHeader';
import SharedPageMain from '@/Components/sharedPage/SharedPageMain';
import { getUserData, getUserPick } from '@/pages/api/api';

interface Card {
  createdAt: string | number;
  description: string;
  imageSource: string;
  title: string;
  url: string;
  id: number;
}

interface User {
  email: string;
  profileImageSource: string;
}

interface UserInfo {
  name: string;
  owner: { profileImageSource: ''; name: '' };
}

export async function getServerSideProps() {
  const { email, profileImageSource } = await getUserData();
  const user = { email, profileImageSource };

  const { folder } = await getUserPick();
  const { name, owner, links: cards } = folder;
  const userInfo = { name, owner };

  return {
    props: {
      user,
      userInfo,
      cards,
    },
  };
}

function SharedPage({
  user,
  userInfo,
  cards,
}: {
  user: User;
  userInfo: UserInfo;
  cards: Card[];
}) {
  const [cardData, setCardData] = useState(cards);
  const [search, setSearch] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const makeSearchList = () => {
    const isInclude = (data: string, key = search) =>
      data?.toLowerCase().includes(key?.toLowerCase());

    const filteredSearch = cardData?.filter(
      (card: Card) =>
        isInclude(card.title) ||
        isInclude(card.url) ||
        isInclude(card.description)
    );
    setCardData(filteredSearch);
  };

  useEffect(() => {
    makeSearchList();
  }, [search]);

  return (
    <>
      <Nav userData={user} />
      <SharedPageHeader userInfo={userInfo} />
      <SharedPageMain
        search={search}
        handleSearch={handleSearch}
        cardData={cardData}
      />
      <Footer />
    </>
  );
}

export default SharedPage;
