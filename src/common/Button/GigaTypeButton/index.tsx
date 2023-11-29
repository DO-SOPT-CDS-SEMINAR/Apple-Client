import * as S from './GigaTypeButton.style';

export interface GigaTypeButtonProps {
  disabled?: boolean;
  giga: number;
  price: number;
}

export const GigaTypeButton = ({ disabled, giga, price }: GigaTypeButtonProps) => {
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);
  return (
    <S.Wrapper disabled={disabled}>
      <S.TextWrapper>
        <S.Giga>{giga}GB¹</S.Giga>
        <S.Price>₩{formattedPrice}부터</S.Price>
      </S.TextWrapper>
    </S.Wrapper>
  );
};
