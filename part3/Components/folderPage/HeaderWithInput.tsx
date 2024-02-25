import { MouseEvent, FormHTMLAttributes, ChangeEvent } from 'react';
import styled from 'styled-components';
import PrimeryButton from '../sharing/SPrimeryButton';

const Form = styled.form`
  padding: 5rem 0;
  background: var(--linkbrary-bg, #f0f6ff);

  @media screen and (max-width: 767px) {
    padding: 5rem 2rem;
  }
`;

const LinkInputBox = styled.div`
  position: relative;
  width: 70vw;
  max-width: 120rem;

  @media screen and (max-width: 1199px) {
    width: 100%;
    max-width: 45rem;
  }
`;

export const Input = styled.input`
  display: flex;
  width: 70vw;
  max-width: 120rem;
  height: 4.5rem;
  padding: 1rem 1.25rem 1rem 3rem;
  border-radius: 15px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: var(--linkbrary-white, #fff);

  &:focus {
    outline-color: var(--linkbrary-primary-color, #6d6afe);
  }

  @media screen and (max-width: 1199px) {
    width: 100%;
    max-width: 45rem;
  }
`;

const Img = styled.img`
  position: absolute;
  bottom: 1.5rem;
  left: 1rem;
`;

const Button = styled(PrimeryButton)`
  position: absolute;
`;

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  inputValue: string;
  handleValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleModal: (e: MouseEvent<HTMLElement>) => void;
}

export default function HeaderWithInPut({ inputValue, handleValue, handleModal, className }: Props) {
  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValue);
    handleModal(e);
  };

  return (
    <>
      <Form className={className} onSubmit={handleSubmit}>
        <Input placeholder="링크를 입력하세요" value={inputValue} onChange={(e) => handleValue(e)} />
        <LinkInputBox>
          <Img src="/link.svg" alt="사슬 이미지" />
          <Button type="submit">추가하기</Button>
        </LinkInputBox>
      </Form>
    </>
  );
}
