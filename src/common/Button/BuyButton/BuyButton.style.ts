import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.7rem 1.5rem;
<<<<<<< HEAD
  border-radius: 1.5rem;
=======
  border-radius: 1.8rem;
>>>>>>> 068e8ee7511e4c05afebd2cf98daab6ae3350f25

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
