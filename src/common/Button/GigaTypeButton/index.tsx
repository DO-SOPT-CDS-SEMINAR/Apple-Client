import { ButtonHTMLAttributes } from 'react';
import * as S from './GigaTypeButton.style';

export type GigaTypeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  giga: number;
  gigaType: string;
  price: number;
  onClick?: () => void;
};

export const GigaTypeButton = ({
  disabled,
  giga,
  gigaType,
  price,
  onClick,
}: GigaTypeButtonProps) => {
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);
  return (
    <S.Wrapper disabled={disabled} onClick={onClick}>
      <S.TextWrapper>
        <S.Giga>
          {giga}
          {gigaType}¹
        </S.Giga>
        <S.Price>₩{formattedPrice}부터</S.Price>
      </S.TextWrapper>
    </S.Wrapper>
  );
};
