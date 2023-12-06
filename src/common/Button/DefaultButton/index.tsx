import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './DefaultButton.style';

export type DefaultButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

export const DefaultButton = ({ children, disabled, onClick }: DefaultButtonProps) => {
  return (
    <S.Wrapper disabled={disabled} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
};
