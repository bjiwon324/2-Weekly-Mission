import Image from 'next/image';
import { MouseEvent } from 'react';

interface Props {
  isSelected: number | null;
  onClick: (e: MouseEvent) => void;
  id: number;
  className: string;
}

export default function Star({ isSelected, onClick, id, className }: Props) {
  return (
    <Image
      onClick={onClick}
      className={className}
      src={isSelected === id ? 'selected.svg' : 'star.svg'}
      alt="즐겨찾기 버튼"
      width="34"
      height="34"
    />
  );
}
