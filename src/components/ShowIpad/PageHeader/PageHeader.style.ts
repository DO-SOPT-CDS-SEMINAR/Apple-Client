import styled from 'styled-components';

export const PageHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  margin: 4.2rem 12rem 2.6rem;
`;

export const HeadText = styled.p`
  margin-top: 8rem;

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.heading1};
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 8.3rem;

  gap: 1.6rem;
`;

export const SpecialListContainer = styled.div`
  display: flex;

  gap: 0.9rem;
`;

export const StoreContainer = styled.div`
  display: flex;

  gap: 0.8rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.4rem;
`;

export const Title = styled.p`
  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.body3};
`;

export const Description = styled.p`
  color: ${({ theme: { colors } }) => colors.pointColor.blue0};
  ${({ theme: { fonts } }) => fonts.body3_2};
`;
