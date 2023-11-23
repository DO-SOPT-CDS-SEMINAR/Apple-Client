import styled from 'styled-components';

export const ProductContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 40rem;
  height: 49rem;

  border-radius: 1.8rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.white};
`;

export const ProductName = styled.p`
  width: calc(100% - 6rem);
  margin: 5.4rem 0rem 5.6rem;

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.subheading1_1};
`;

export const ProductImg = styled.img`
  width: 25.2rem;
  height: 22.5rem;
  margin-bottom: 2.4rem;
`;

export const ColorsContainer = styled.div`
  display: flex;

  width: 3rem;
  height: 1.2rem;
  margin-bottom: 1.4rem;

  gap: 0.6rem;
`;

export const ProductColorsImg = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

export const BottomContainer = styled.div`
  display: flex;

  gap: 15.5rem;
`;

export const ProductPrice = styled.p`
  display: flex;
  align-items: end;

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.body3_1};
`;
