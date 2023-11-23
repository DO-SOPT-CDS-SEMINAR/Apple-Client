import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;

  margin-bottom: 2rem;

  gap: 0.2rem;
`;

export const Title = styled.p`
  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.subheading1_1};
`;

export const SubTitle = styled.p`
  color: ${({ theme: { colors } }) => colors.grayScale.gray6};
  ${({ theme: { fonts } }) => fonts.subheading1_1};
`;
