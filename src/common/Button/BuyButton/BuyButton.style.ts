import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8.5rem;
  height: 3.6rem;
  padding: 0.7rem 1.5rem;
  border-radius: 1.5rem;

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
