import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32.8rem;
  height: 4rem;
  padding: 0.8rem 1.5rem;
  border-radius: 1.2rem;

  background-color: ${({ theme }) => theme.colors.pointColor.blue1};
  color: ${({ theme }) => theme.colors.grayScale.white};
  ${({ theme }) => theme.fonts.body1};

  &:hover {
    background-color: ${({ theme }) => theme.colors.pointColor.blue2};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.pointColor.blue0};
  }
`;
