import React, { MouseEvent, useState } from 'react';
import Card from './Card';
import { NoneText } from '../../folderPage/FolderPageMain';
import styled from 'styled-components';

const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px 20px;
  width: 100%;
  list-style-type: none;

  > li {
    width: 100%;
  }

  @media (max-width: 1124px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    display: block;
  }
`;

interface Card {
  created_at?: string | number;
  createdAt?: string | number;
  description: string;
  image_source?: string;
  imageSource?: string;
  title: string;
  url: string;
  id: number;
  folder_Id?: number;
}

interface BtnProps {
  id: number;
  name: string;
  link: { count: number };
}

interface Props {
  cardData: Card[];

  handleModal: (e: MouseEvent<HTMLElement>) => void;
  handleShowAll?: (e: MouseEvent) => void;
  isModal: number | string | null;
  buttons?: BtnProps[];
}

const CardsList = ({
  cardData,
  handleModal,
  handleShowAll,
  isModal,
  buttons,
}: Props) => {
  const [isSelected, setIsSelected] = useState<number | null>(null);
  const [isKebab, setIsKebab] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    isSelected === id ? setIsSelected(null) : setIsSelected(id);
  };

  const handleKebab = (id: number) => {
    isKebab === id ? setIsKebab(null) : setIsKebab(id);
  };

  return (
    <>
      {cardData?.length !== 0 ? (
        <CardList>
          {cardData?.map((card) => (
            <li key={card.id}>
              <Card
                card={card}
                isSelected={isSelected}
                isKebab={isKebab}
                handleSelect={handleSelect}
                handleKebab={handleKebab}
                handleModal={handleModal}
                isModal={isModal}
                buttons={buttons}
              />
            </li>
          ))}
        </CardList>
      ) : (
        <NoneText>저장된 링크가 없습니다</NoneText>
      )}
    </>
  );
};

export default CardsList;
