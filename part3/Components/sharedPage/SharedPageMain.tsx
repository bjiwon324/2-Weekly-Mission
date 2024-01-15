import React, { ChangeEvent, MouseEvent, useState } from 'react';
import CardsList from '../sharing/Card/CardsList';
import SearchBox from '../sharing/SearchBox';

interface Card {
  createdAt: string | number;
  description: string;
  imageSource: string;
  title: string;
  url: string;
  id: number;
}

interface Prop {
  cardData: Card[];
  search: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SharedPageMain({
  search,
  handleSearch,
  cardData,
}: Prop) {
  const [isModal, setIsModal] = useState<number | string | null>(null);

  const handleModal = (e: MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;

    if (isModal === id) {
      setIsModal(null);
    }

    setIsModal(id);
  };

  return (
    <main>
      <SearchBox search={search} handleSearch={handleSearch} />
      <CardsList
        isModal={isModal}
        handleModal={handleModal}
        cardData={cardData}
      />
    </main>
  );
}
