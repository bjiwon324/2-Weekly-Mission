import { ChangeEvent } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 0 2.5rem;
`;

const Img = styled.img`
  position: absolute;

  &:first-child {
    width: 1rem;
    height: 1rem;
    left: 0.8rem;
  }

  &.delete {
    width: 1.5rem;
    height: 1.5rem;
    right: 1rem;
    cursor: pointer;
  }
`;

const Input = styled.input`
  margin: 0;
  padding: 1rem 2.5rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
  background: #f5f5f5;
  border: none;

  &:focus {
    outline-color: var(--linkbrary-primary-color, #6d6afe);
  }
`;

interface Props {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  search: string;
  setSearch?: any;
}

export default function SearchBox({ handleSearch, search, setSearch }: Props) {
  return (
    <Form>
      <Img src={search ? '/searched.png' : '/Search.svg'} alt="돋보기 사진" />
      <Img src="/modalclose.png" className="delete" alt="검색창 지우기" onClick={() => setSearch('')} />
      <Input placeholder="링크를 검색해보세요" type="text" value={search} onChange={handleSearch} />
    </Form>
  );
}
