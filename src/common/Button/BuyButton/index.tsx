import { ButtonHTMLAttributes } from 'react';
import * as S from './BuyButton.style';

export type BuyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
};

export const BuyButton = ({ children, disabled }: BuyButtonProps) => {
  return <S.Wrapper disabled={disabled}>{children}</S.Wrapper>;
};
