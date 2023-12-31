import styled from 'styled-components';

export const CategorySec = styled.section`
  position: relative;
  padding: 5rem 7.5rem;

  width: 100vw;
  height: 24.8rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.gray2};

  & > h1 {
    color: ${({ theme: { colors } }) => colors.grayScale.gray6};
    ${({ theme: { fonts } }) => fonts.heading1};
  }
`;

export const Point = styled.span`
  color: ${({ theme: { colors } }) => colors.pointColor.red0};
  ${({ theme: { fonts } }) => fonts.heading1};
`;

export const Plus = styled.div`
  display: grid;
  grid-gap: 0.4rem;
  justify-content: end;

  margin-left: 0.9rem;

  & > p {
    color: ${({ theme: { colors } }) => colors.grayScale.gray8};

    ${({ theme: { fonts } }) => fonts.body3};
  }
`;

export const MoreInfoWrapper = styled.section`
  position: absolute;
  right: 7.5rem;
  top: 5rem;

  & > div {
    display: flex;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  vertical-align: center;
  grid-gap: 0.2rem;

  padding: 0;
  margin-bottom: 1.6rem;

  color: ${({ theme: { colors } }) => colors.pointColor.blue0};

  ${({ theme: { fonts } }) => fonts.body3_2};

  text-align: left;
`;
