import { MouseEvent } from 'react';
import EditList from './EditList';
import S from '@/styles/sortButton.module.css';
import Image from 'next/image';

interface Props {
  handleModal: (e: MouseEvent<HTMLElement> | MouseEvent<HTMLImageElement>) => void;
  buttons: BtnProps[];
  littleTitle?: string | undefined;
  handleShowAll: (e: MouseEvent) => void;
  yourPick: (id: number, name: string) => void;
}

interface BtnProps {
  id: number;
  name: string;
}

export default function SortButton({ handleModal, handleShowAll, yourPick, littleTitle, buttons }: Props) {
  return (
    <>
      <section className={S.buttonLine}>
        <ul className={S.list}>
          <li>
            <button
              onClick={handleShowAll}
              className={`${S.listUpButton}  ${littleTitle === '전체' ? S.clickButton : ''} `}
            >
              전체
            </button>
          </li>
          {buttons?.map((btn) => {
            return (
              <li key={btn.id}>
                <button
                  onClick={() => yourPick(btn.id, btn.name)}
                  className={`${S.listUpButton} ${littleTitle === btn.name ? S.clickButton : ''}`}
                >
                  {btn.name}
                </button>
              </li>
            );
          })}
        </ul>
        <button className={S.addButton} id="addLink" onClick={handleModal}>
          <Image width="16" height="17" src="/add.svg" alt="링크 추가 버튼" />
        </button>
      </section>
      <section className={S.buttonLine}>
        <h2 className={S.littleTitle}>{littleTitle || '전체'}</h2>
        {littleTitle !== '전체' && <EditList handleModal={handleModal} />}
      </section>
    </>
  );
}
