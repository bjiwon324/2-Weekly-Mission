import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import styled from 'styled-components';

const SnsContainer = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;

  border-radius: 8px;
  border: 1px solid var(--linkbrary-gray-20);
  background: var(--linkbrary-gray-10);
  font-size: 0.875rem;
  margin: 2rem 0;

  > p {
    margin: 0;
  }
`;

const SnsList = styled.section`
  height: 2.625rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  gap: 1rem;

  > a {
    margin: 0;
    position: relative;
    display: flex;
    align-items: center;
    width: 2.625rem;
    height: 2.625rem;
  }
`;

export default function SnsBox({ children }: { children: ReactNode }) {
  return (
    <SnsContainer>
      <p>{children}</p>
      <SnsList>
        <Link href="https://www.google.com/">
          <Image fill src="/google.png" alt="구글 계정으로 로그인하기" />
        </Link>
        <Link href="https://www.kakaocorp.com/page/">
          <Image fill src="/kakao.png" alt="카카오톡 계정으로 로그인하기" />
        </Link>
      </SnsList>
    </SnsContainer>
  );
}
