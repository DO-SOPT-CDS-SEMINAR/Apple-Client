import * as S from './Nb.style';
import { useState } from 'react';
import { MAIN_BUTTON_DATA } from '../../constant/MAIN_BUTTON';

export interface NbButtonProps {
  label: string;
  index: number;
  onClick: (index: number) => void;
  isActive: boolean;
}

//버튼 안에 라벨 넣기
export const NbButton = ({ label, index, onClick, isActive }: NbButtonProps) => {
  return (
    <S.NbBtn onClick={() => onClick(index)} isActive={isActive}>
      {label}
    </S.NbBtn>
  );
};

const Nb = () => {
  const [isClicked, setIsClicked] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // 화면 내 키 전송을 통한 이동용
  const moveToPage = (index: number) => {
    setIsClicked(index);
    setIsActive(true);
  };

  // map을 통해서 버튼 생성
  return (
    <S.NbWrapper>
      {MAIN_BUTTON_DATA.map((button, index) => (
        <NbButton
          key={index}
          label={button.label}
          index={index}
          onClick={moveToPage}
          isActive={isClicked === index}
        />
      ))}
    </S.NbWrapper>
  );
};

export default Nb;
