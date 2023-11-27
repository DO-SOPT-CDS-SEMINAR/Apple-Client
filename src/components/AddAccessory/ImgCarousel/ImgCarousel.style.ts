import Slider from 'react-slick';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 40rem;
  height: 40.9rem;
`;

export const SliderWrapper = styled(Slider)`
  width: 100%;
  height: 100%;
`;

export const Img = styled.div`
  width: 40rem;

  & > img {
    width: 40rem;
  }
`;

export const CustomDotsContainer = styled.div`
  position: absolute;
  bottom: 0.8rem;
  ul {
    justify-content: center;
    display: flex;

    height: 2.7rem;
    width: 40rem;

    align-items: center;

    list-style: none;

    li {
      button {
        width: 1rem;
        height: 1rem;
        margin: 0 0.5rem;

        cursor: pointer;

        &:before {
          content: '•';
          font-size: 3.5rem;
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
