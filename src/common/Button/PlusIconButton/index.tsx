import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './PlusIconButton.style';

export type PlusIconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: ReactNode;
};

export const PlusIconButton = ({ children, disabled }: PlusIconButtonProps) => {
  return <S.Wrapper disabled={disabled}>{children}</S.Wrapper>;
};
