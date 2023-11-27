import * as S from './ToggleMenu.style';
import { useState } from 'react';

import ToggleButton from './ToggleButton';
import { TOGGLE_MEMU } from '../../../constant/toggleMenu';

const ToggleMenu = () => {
  const [isActive, setIsActive] = useState<number | null>(TOGGLE_MEMU[0]?.idx || null);

  const activateBtn = (idx: number) => {
    setIsActive(idx);
  };

  return (
    <S.ToggleWrapper>
      {TOGGLE_MEMU.map((item) => {
        return (
          <ToggleButton
            key={item.idx}
            idx={item.idx}
            ButtonName={item.buttonName}
            onClick={activateBtn}
            isActive={isActive === item.idx}
          />
        );
      })}
      ;
    </S.ToggleWrapper>
  );
};

export default ToggleMenu;
