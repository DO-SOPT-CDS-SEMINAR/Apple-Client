import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './DefaultButton.style';

export type DefaultButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: ReactNode;
};

export const DefaultButton = ({ children, disabled }: DefaultButtonProps) => {
  return <S.Wrapper disabled={disabled}>{children}</S.Wrapper>;
};
