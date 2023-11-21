import * as S from './Nb.style';
import { useState } from 'react';

const Nb = () => {
  const [isClicked, setIsClicked] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const moveToPage = (index: number) => {
    setIsClicked(index);
    setIsActive(true);
  };

  return (
    <S.NbWrapper>
      <S.NbBtn onClick={() => moveToPage(0)} isActive={isClicked === 0}>
        최신제품
      </S.NbBtn>
      <S.NbBtn onClick={() => moveToPage(1)} isActive={isClicked === 1}>
        맞춤각인
      </S.NbBtn>
      <S.NbBtn onClick={() => moveToPage(2)} isActive={isClicked === 2}>
        Apple 독점제공
      </S.NbBtn>
      <S.NbBtn onClick={() => moveToPage(3)} isActive={isClicked === 3}>
        특별할인
      </S.NbBtn>
    </S.NbWrapper>
  );
};

export default Nb;
