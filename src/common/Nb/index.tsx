import * as S from './Nb.style';
import { useState } from 'react';

export interface NbButtonProps {
  label: string;
  index: number;
  onClick: (index: number) => void;
  isActive: boolean;
}

export interface NbProps {
  DATA: Array<string>;
  isTab?: boolean;
}

//버튼 안에 라벨 넣기
export const NbButton = ({ label, index, onClick, isActive }: NbButtonProps) => {
  return (
    <S.NbBtn onClick={() => onClick(index)} $isActive={isActive}>
      {label}
    </S.NbBtn>
  );
};

const Nb = ({ DATA, isTab }: NbProps) => {
  const [isClicked, setIsClicked] = useState(0);
  const [, setIsActive] = useState(false);

  const moveToPage = (index: number) => {
    setIsClicked(index);
    setIsActive(true);
  };

  // map을 통해서 버튼 생성
  return (
    <S.NbWrapper $isTab={isTab}>
      {DATA.map((button, index) => (
        <NbButton
          key={index}
          label={button}
          index={index}
          onClick={moveToPage}
          isActive={isClicked === index}
        />
      ))}
    </S.NbWrapper>
  );
};

export default Nb;
