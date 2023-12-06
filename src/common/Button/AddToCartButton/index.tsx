import { ButtonHTMLAttributes } from 'react';
import * as S from './AddToCartButton.style';

export type AddToCartButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export const AddToCartButton = ({ children, disabled, onClick }: AddToCartButtonProps) => {
  return (
    <S.Wrapper disabled={disabled} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
};
