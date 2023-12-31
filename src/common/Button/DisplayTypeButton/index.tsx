import { ButtonHTMLAttributes } from 'react';
import * as S from './DisplayTypeButton.style';

export type DisplayTypeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  title: string;
  subtext: string;
  price: number;
  onClick?: () => void;
};

export const DisplayTypeButton = ({
  title,
  subtext,
  price,
  disabled,
  onClick,
}: DisplayTypeButtonProps) => {
  const formattedPrice = price.toLocaleString();
  return (
    <S.Wrapper disabled={disabled} onClick={onClick}>
      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <S.SubText>{subtext}</S.SubText>
      </S.TextWrapper>
      <S.Price>₩{formattedPrice}부터</S.Price>
    </S.Wrapper>
  );
};
