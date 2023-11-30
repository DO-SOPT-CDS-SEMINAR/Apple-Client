import { ReactNode } from 'react';
import * as S from './ToggleMenu.style';

interface ToggleButtonProps {
  idx: number;
  ButtonName: ReactNode;
  onClick: (id: number) => void;
  isActive: boolean;
}

const ToggleButton = ({ idx, ButtonName, onClick, isActive }: ToggleButtonProps) => {
  return (
    <S.Button onClick={() => onClick(idx)} $isActive={isActive}>
      {ButtonName}
    </S.Button>
  );
};

export default ToggleButton;
