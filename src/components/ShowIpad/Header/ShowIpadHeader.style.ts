import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  ${({ theme: { fonts } }) => fonts.subheading1_1};

  margin-bottom: 2rem;
`;

export const Title = styled.p`
  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
`;

export const SubTitle = styled.p`
  color: ${({ theme: { colors } }) => colors.grayScale.gray6};
`;
