import styled from 'styled-components';

export const Dim = styled.section`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 100vw;

  background-color: black;

  opacity: 80%;
  z-index: 1;
`;

export const CloseIcon = styled.button`
  position: fixed;
  top: 11.5rem;

  width: 3.6rem;
  height: 3.6rem;

  z-index: 2;
`;

export const Modal = styled.section`
  position: fixed;
  top: 27.1rem;

  width: 98rem;
  height: 71.6rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.white};
  border-radius: 3rem;

  z-index: 2;
`;

export const Title = styled.h1`
  margin: 4rem 18.1rem;

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};

  font: ${({ theme: { fonts } }) => fonts.heading3};
`;
