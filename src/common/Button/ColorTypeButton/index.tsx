import { ButtonHTMLAttributes } from 'react';
import * as S from './ColorTypeButton.style';

export type ColorTypeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  ColorComponent: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export const ColorTypeButton = ({
  ColorComponent,
  disabled,
  children,
  onClick,
}: ColorTypeButtonProps) => {
  return (
    <S.Wrapper disabled={disabled} onClick={onClick}>
      <ColorComponent />
      <S.Color>{children}</S.Color>
    </S.Wrapper>
  );
};
