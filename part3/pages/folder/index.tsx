import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from '@/Components/sharing/Nav';
import Footer from '@/Components/sharing/Footer';
import HeaderWithInPut from '@/Components/folderPage/HeaderWithInput';
import FolderPageMain from '@/Components/folderPage/FolderPageMain';
import EditModal from '@/Components/sharing/Modals/EditModal';
import AddFolderModal from '@/Components/sharing/Modals/AddFolderModal';
import DeleteFoderModal from '@/Components/sharing/Modals/DeleteFolderModal';
import ShareModal from '@/Components/sharing/Modals/ShareModal';
import AddLinkModal from '@/Components/sharing/Modals/AddLinkModal';
import { forUser1, TasteUser1, getUserList } from '../api/api';

const ForFolderNav = styled(Nav)`
  position: static;
`;

interface Btn {
  id: number;
  name: string;
  link: { count: number };
}

interface Card {
  created_at: string | number;
  description: string;
  image_source: string;
  title: string;
  url: string;
  id: number;
  folder_Id: number;
}

interface User {
  email: string;
  profileImageSource: string;
}

export async function getServerSideProps() {
  const { data } = await forUser1();
  const [{ image_source: profileImageSource, email }] =
    data.map((item: object) => (item ? item : '')) ?? [];

  const user = { profileImageSource, email };

  const { data: cards } = await getUserList();

  const { data: btnData } = await TasteUser1();

  return {
    props: {
      user,
      cards,
      btnData,
    },
  };
}

export default function FolderPage({
  user,
  cards,
  btnData,
}: {
  user: User;
  cards: Card[];
  btnData: Btn[];
}) {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');
  const [isModal, setIsModal] = useState<number | string | null>(null);
  const [littleTitle, setLittleTitle] = useState<string>('전체');

  const [cardData, setCardData] = useState(cards);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const makeSearchList = () => {
    const isInclude = (data: string, key = search) =>
      data?.toLowerCase().includes(key?.toLowerCase());

    const filteredSearch = cards?.filter(
      (card: Card) =>
        isInclude(card.title) ||
        isInclude(card.url) ||
        isInclude(card.description)
    );

    setCardData(filteredSearch);
  };

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleModal = (e: MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;

    if (isModal === id) {
      setIsModal(null);
    }
    console.log(e.currentTarget.id);
    setIsModal(id);
  };

  const handleShowAll = () => {
    setCardData(cards);
    setLittleTitle('전체');
  };

  const yourPick = async (id: number, name: string) => {
    const { data } = await getUserList(id);

    const filteredCards = data.filter(
      ({ folder_id }: { folder_id: number }) => folder_id === id
    );
    setCardData(filteredCards);
    setLittleTitle(name);
  };

  useEffect(() => {
    makeSearchList();
    handleShowAll();
  }, []);

  return (
    <>
      <ForFolderNav userData={user} />
      <HeaderWithInPut
        inputValue={inputValue}
        handleValue={handleValue}
        handleModal={handleModal}
      />

      <FolderPageMain
        setSearch={setSearch}
        handleSearch={handleSearch}
        handleModal={handleModal}
        handleShowAll={handleShowAll}
        yourPick={yourPick}
        search={search}
        isModal={isModal}
        littleTitle={littleTitle}
        buttons={btnData}
        cardData={cardData}
      />
      <Footer />
      {isModal === 'addLink' && <AddFolderModal handleModal={handleModal} />}
      {isModal === 'goshare' && (
        <ShareModal
          name={littleTitle ? littleTitle : ''}
          handleModal={handleModal}
        />
      )}
      {isModal === 'changeName' && <EditModal handleModal={handleModal} />}
      {isModal === 'deleteFolder' && (
        <DeleteFoderModal name={littleTitle} handleModal={handleModal} />
      )}
      {isModal === 'addLinkBtn' && (
        <AddLinkModal
          url={inputValue}
          buttons={btnData}
          handleModal={handleModal}
        />
      )}
    </>
  );
}
