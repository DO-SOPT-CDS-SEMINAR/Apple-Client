import { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import * as S from './PlusIconButton.style';
import { IpadproIcPlusCircleFill, IpadproIcPlusCircleNormal } from '../../../assets/icon';

export type PlusIconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

export const PlusIconButton = ({ children, disabled, onClick }: PlusIconButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <S.Wrapper
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
      {isHovered ? <IpadproIcPlusCircleFill /> : <IpadproIcPlusCircleNormal />}
    </S.Wrapper>
  );
};
