import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32.8rem;
  height: 4rem;
  padding: 0.8rem 1.5rem;
  border-radius: 1.2rem;

  background-color: ${({ theme: { colors } }) => colors.pointColor.blue1};
  color: ${({ theme: { colors } }) => colors.grayScale.white};
  ${({ theme: { fonts } }) => fonts.body1};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.pointColor.blue2};
  }

  &:focus {
    background-color: ${({ theme: { colors } }) => colors.pointColor.blue0};
  }
`;
