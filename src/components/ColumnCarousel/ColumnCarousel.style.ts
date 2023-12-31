import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10rem;
  width: 32.8rem;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE, Edge에서 스크롤바 감추기 */
  scrollbar-width: none; /* Firefox에서 스크롤바 감추기 */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera에서 스크롤바 감추기 */
  }
`;

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const PlusContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1.2rem;
  padding: 1.6rem;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.grayScale.gray2};
  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.body3_1};
  > p {
    ${({ theme: { fonts } }) => fonts.body3};
  }
`;

export const Text = styled.p`
  display: flex;
  color: ${({ theme: { colors } }) => colors.grayScale.gray5};
  ${({ theme: { fonts } }) => fonts.subheading2};
  > p {
    color: ${({ theme: { colors } }) => colors.grayScale.gray8};
    ${({ theme: { fonts } }) => fonts.subheading2};
  }
`;

export const TypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GigaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FinalPrice = styled.p`
  display: flex;
  color: ${({ theme: { colors } }) => colors.grayScale.gray8};

  ${({ theme: { fonts } }) => fonts.subheading1};
`;

export const VATText = styled.p`
  display: flex;
  color: ${({ theme: { colors } }) => colors.grayScale.gray6};
  ${({ theme: { fonts } }) => fonts.body3_1};
`;

export const CardText = styled.p`
  display: flex;
  color: ${({ theme: { colors } }) => colors.pointColor.blue0};
  ${({ theme: { fonts } }) => fonts.body3_1};
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const ItemBox = styled.div`
  display: flex;
`;

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 0.8rem;
`;

export const ItemTitle = styled.div`
  display: flex;
  ${({ theme: { fonts } }) => fonts.body3_1};
`;

export const ItemSub = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme: { colors } }) => colors.pointColor.blue0};
  ${({ theme: { fonts } }) => fonts.body3_1};

  > p {
    ${({ theme: { fonts } }) => fonts.body3};
    color: ${({ theme: { colors } }) => colors.grayScale.black};
  }
`;
