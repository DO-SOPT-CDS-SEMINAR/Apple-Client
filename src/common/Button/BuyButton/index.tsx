import * as S from './BuyButton.style';

export interface BuyButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

export const BuyButton = ({ children, disabled }: BuyButtonProps) => {
  return <S.Wrapper disabled={disabled}>{children}</S.Wrapper>;
};
