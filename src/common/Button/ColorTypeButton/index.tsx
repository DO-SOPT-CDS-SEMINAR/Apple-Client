import * as S from './ColorTypeButton.style';

export interface ColorTypeButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

export const ColorTypeButton = ({ disabled, children }: ColorTypeButtonProps) => {
  return (
    <S.Wrapper disabled={disabled}>
      <S.Color>{children}</S.Color>
    </S.Wrapper>
  );
};
