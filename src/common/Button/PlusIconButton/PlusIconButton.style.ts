import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.2rem 1.6rem;
  border-radius: 4.2rem;
  gap: 0.4rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.gray2};
  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.caption2};
`;
