import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  padding: 0 12rem;

  margin-bottom: 1rem;

  ${({ theme: { fonts } }) => fonts.subheading1_1};

  gap: 0.2rem;
`;

export const Title = styled.p`
  color: ${({ theme: { colors } }) => colors.pointColor.red0};
`;

export const SubTitle = styled.p`
  color: ${({ theme: { colors } }) => colors.grayScale.gray6};
`;
