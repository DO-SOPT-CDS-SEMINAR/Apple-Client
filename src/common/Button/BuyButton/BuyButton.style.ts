import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 7px 15px;
  border-radius: 15px;

  background-color: ${({ theme }) => theme.colors.pointColor.blue1};
  color: ${({ theme }) => theme.colors.grayScale.white};
  ${({ theme }) => theme.fonts.body1};

  &:hover {
    background-color: ${({ theme }) => theme.colors.pointColor.blue2};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.pointColor.blue0};
  }
`;
