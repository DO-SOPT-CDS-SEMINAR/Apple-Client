import { ButtonHTMLAttributes } from 'react';
import * as S from './ColorTypeButton.style';

export type ColorTypeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  ColorComponent: string;
  disabled?: boolean;
  children: React.ReactNode;
};

export const ColorTypeButton = ({ ColorComponent, disabled, children }: ColorTypeButtonProps) => {
  return (
    <S.Wrapper disabled={disabled}>
      <ColorComponent />
      <S.Color>{children}</S.Color>
    </S.Wrapper>
  );
};
