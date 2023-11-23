import * as S from './AddToCartButton.style';

export interface AddToCartButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

export const AddToCartButton = ({ children, disabled }: AddToCartButtonProps) => {
  return <S.Wrapper disabled={disabled}>{children}</S.Wrapper>;
};
