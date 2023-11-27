import styled from 'styled-components';

export const Dim = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vw;

  background-color: black;

  opacity: 80%;
  z-index: 1;
`;

export const CloseIcon = styled.button`
  position: absolute;
  top: 11.5rem;
  left: 20.1rem;

  width: 3.6rem;
  height: 3.6rem;

  z-index: 2;
`;

export const Modal = styled.section`
  position: absolute;
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

  ${({ theme: { fonts } }) => fonts.heading3};
`;

export const ContextWrapper = styled.div`
  display: flex;

  width: 88rem;
  height: 52.8rem;
  margin: 5rem 5rem 4.8rem 5rem;

  z-index: 2;
`;

export const ModalImg = styled.div`
  width: 40rem;
  margin: 10.7rem 2.8rem 4.8rem 0rem;

  background-color: lightgrey;

  z-index: 3;
`;

export const ContextText = styled.div`
  margin: 5rem 0rem auto auto;
`;

export const SubTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.grayScale.gray8};

  ${({ theme: { fonts } }) => fonts.subheading1};

  word-break: keep-all;
`;

export const PriceWrapper = styled.div`
  display: flex;

  & > p {
    display: flex;
    align-items: center;
    vertical-align: center;

    height: 3.6rem;
    width: 27.6rem;
    margin-right: 7.9rem;

    color: ${({ theme: { colors } }) => colors.grayScale.gray8};

    ${({ theme: { fonts } }) => fonts.body3_2};
  }
`;
