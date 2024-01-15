import React, { ChangeEvent, MouseEvent } from 'react';
import styled from 'styled-components';
import SearchBox from '../sharing/SearchBox';
import CardsList from '../sharing/Card/CardsList';
import SortButton from './SortButton';

export const NoneText = styled.p`
  text-align: center;

  font-size: 1rem;
  font-weight: 400;
`;

const SearchText = styled.h1`
  color: var(--Linkbrary-gray100);

  font-size: 2rem;
  font-weight: 600;
  line-height: normal;

  > span {
    color: var(--Linkbrary-gray60, #9fa6b2);
  }
`;

interface Porps {
  search: string;
  isModal: number | string | null;
  littleTitle: string | undefined;
  buttons: Btn[];
  cardData: Card[];
  handleShowAll: any;
  yourPick: (id: number, name: string) => void;
  handleModal: (e: MouseEvent<HTMLElement>) => void;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  setSearch: any;
}

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

export default function FolderPageMain({
  search,
  setSearch,
  handleSearch,
  isModal,
  buttons,
  cardData,
  handleShowAll,
  yourPick,
  handleModal,
  littleTitle,
}: Porps) {
  if (!cardData) {
    <main>
      <SearchBox
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <NoneText>저장된 링크가 없습니다</NoneText>
    </main>;
  }
  return (
    <main>
      <SearchBox
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {search && (
        <SearchText>
          {search}
          <span>으로 검색한 결과입니다.</span>
        </SearchText>
      )}
      <SortButton
        handleModal={handleModal}
        buttons={buttons}
        handleShowAll={handleShowAll}
        yourPick={yourPick}
        littleTitle={littleTitle}
      />
      <CardsList
        handleModal={handleModal}
        handleShowAll={handleShowAll}
        isModal={isModal}
        buttons={buttons}
        cardData={cardData}
      />
    </main>
  );
}
