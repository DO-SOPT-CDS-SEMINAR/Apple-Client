import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5.4rem;
  height: 4.1rem;
  padding: 1.2rem 1.6rem;
  border-radius: 4.2rem;
  gap: 0.4rem;

  background-color: ${({ theme }) => theme.colors.grayScale.gray2};
  color: ${({ theme }) => theme.colors.grayScale.gray8};
  ${({ theme }) => theme.fonts.caption2};
`;
