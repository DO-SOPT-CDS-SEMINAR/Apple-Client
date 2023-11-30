import styled from 'styled-components';

export const Dim = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vw;
  opacity: 80%;

  background-color: black;

  z-index: 1;
`;

export const Wrapper = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const CloseIcon = styled.button`
  position: absolute;
  top: 11.5rem;
  left: 20.1rem;

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

  margin: 5rem 5rem 4.8rem 5rem;

  z-index: 2;
`;

export const ImgWrapper = styled.section`
  margin: 5.7rem 2.8rem auto auto;
  width: 40rem;
`;

export const ModalImg = styled.div`
  width: 41.2rem;
  height: 40.9rem;

  background-color: lightgrey;

  z-index: 3;
`;

export const ItemInfo = styled.div`
  width: 40rem;

  color: ${({ theme: { colors } }) => colors.grayScale.gray6};

  text-align: center;
  ${({ theme: { fonts } }) => fonts.caption2};

  & > div {
    margin-top: 0.9rem;
  }
  & > div > * {
    width: 1.2rem;
    margin: 0 0.25rem;
  }
`;

export const ContextText = styled.div`
  width: 44rem;
`;

export const SubTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.grayScale.gray8};

  ${({ theme: { fonts } }) => fonts.subheading1};

  word-break: keep-all;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > p {
    display: flex;
    align-items: center;
    vertical-align: center;

    height: 3.6rem;
    width: 27.6rem;

    color: ${({ theme: { colors } }) => colors.grayScale.gray8};

    ${({ theme: { fonts } }) => fonts.body3_2};
  }
`;

export const BuyBtn = styled.button`
  display: flex;
  align-items: center;
  vertical-align: center;

  width: 44rem;
  text-align: left;

  color: ${({ theme: { colors } }) => colors.pointColor.blue0};

  ${({ theme: { fonts } }) => fonts.body2};
`;
