import { ButtonHTMLAttributes } from 'react';
import * as S from './BuyButton.style';

export type BuyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export const BuyButton = ({ children, disabled, onClick }: BuyButtonProps) => {
  return (
    <S.Wrapper disabled={disabled} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
};
