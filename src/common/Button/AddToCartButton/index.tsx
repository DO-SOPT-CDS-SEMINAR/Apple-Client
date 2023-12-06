import { ButtonHTMLAttributes } from 'react';
import * as S from './AddToCartButton.style';

export type AddToCartButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
};

export const AddToCartButton = ({ children, disabled }: AddToCartButtonProps) => {
  return <S.Wrapper disabled={disabled}>{children}</S.Wrapper>;
};
