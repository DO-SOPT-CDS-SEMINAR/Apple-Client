import Slider from 'react-slick';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  width: 44.2rem;
  height: 40rem;
`;

export const SliderWrapper = styled(Slider)`
  position: absolute;

  margin-left: 2.1rem;
  left: -2rem;
  width: 38rem;
  height: 36.5rem;
`;

export const Img = styled.div`
  margin: 0 1.6rem;
  height: 36.8rem;

  & > img {
    width: 35rem;
  }
`;

export const CustomDotsContainer = styled.div`
  position: absolute;
  top: 35.3rem;

  ul {
    justify-content: center;
    display: flex;
    align-items: center;

    width: 40rem;
    height: 2.7rem;

    li {
      button {
        width: 1rem;
        height: 1.3rem;

        cursor: pointer;

        &:before {
          content: '•';
          font-size: 1.3rem;
          color: ${({ theme: { colors } }) => colors.grayScale.gray5};
        }

        &:hover,
        &:focus {
          &:before {
            color: ${({ theme: { colors } }) => colors.grayScale.gray7};
          }
        }

        &.slick-active {
          &:before {
            color: ${({ theme: { colors } }) => colors.grayScale.gray7};
          }
        }
      }
    }
  }
  .slick-dots {
    display: none;
  }
`;

export const ArrowWrapper = styled.div`
  display: none;
  position: absolute;

  left: 38.8rem;
  top: 17.2rem;

  pointer: cursor;
`;
