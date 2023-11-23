import * as S from './DisplayTypeButton.style';

export interface DisplayTypeButtonProps {
  disabled?: boolean;
  title: string;
  subtext: string;
  price: number;
}

export const DisplayTypeButton = ({ title, subtext, price, disabled }: DisplayTypeButtonProps) => {
  const formattedPrice = price.toLocaleString();
  return (
    <S.Wrapper disabled={disabled}>
      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <S.SubText>{subtext}</S.SubText>
      </S.TextWrapper>
      <S.Price>₩{formattedPrice}부터</S.Price>
    </S.Wrapper>
  );
};
