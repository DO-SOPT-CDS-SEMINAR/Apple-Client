import styled from 'styled-components';

export const FooterWrapper = styled.section`
  width: 98rem;
  margin: 0 auto;

  border-top: 1px solid;
  border-color: ${({ theme: { colors } }) => colors.grayScale.gray3};
`;

export const FooterRoute = styled.div`
  display: flex;
  align-items: center;
  margin: 1.7rem 0rem;

  & > p {
    color: ${({ theme: { colors } }) => colors.grayScale.gray6};
    ${({ theme: { fonts } }) => fonts.caption2};
  }
`;

export const FooterList = styled.div`
  display: flex;
  width: 98rem;
  height: 35.9rem;
`;

export const StyledUl = styled.ul`
  width: 17.6rem;
  margin-right: 2rem;
  margin-bottom: 3rem;

  & > li {
    margin: 0.325rem 0rem;

    color: ${({ theme: { colors } }) => colors.grayScale.gray7};
    ${({ theme: { fonts } }) => fonts.caption2};

    cursor: pointer;
  }
`;
export const StyledP = styled.p`
  color: ${({ theme: { colors } }) => colors.grayScale.black};
  ${({ theme: { fonts } }) => fonts.caption1};
`;

export const Link = styled.p`
  height: 6.1rem;
  padding-top: 3.4rem;

  color: ${({ theme: { colors } }) => colors.grayScale.gray6};
  ${({ theme: { fonts } }) => fonts.caption2};

  border-bottom: 1px solid;
  border-color: ${({ theme: { colors } }) => colors.grayScale.gray3};

  & > span {
    color: ${({ theme: { colors } }) => colors.pointColor.blue1};
    ${({ theme: { fonts } }) => fonts.caption2};
    cursor: pointer;
  }
`;

export const Bar = styled.div`
  display: flex;
  position: relative;

  height: 6.1rem;
  padding-top: 1.65rem;
  padding-bottom: 2.1rem;

  & > h1 {
    margin-right: 1.5rem;
    ${({ theme: { fonts } }) => fonts.caption2};
    color: ${({ theme: { colors } }) => colors.grayScale.gray6};
  }
  & > button {
    padding: 0 1.5rem;
    height: 2rem;

    color: ${({ theme: { colors } }) => colors.grayScale.gray7};
    ${({ theme: { fonts } }) => fonts.caption2};
    border-right: 1px solid;
    border-color: ${({ theme: { colors } }) => colors.grayScale.gray3};

    cursor: pointer;
  }

  & > p {
    position: absolute;
    color: ${({ theme: { colors } }) => colors.grayScale.gray7};
    ${({ theme: { fonts } }) => fonts.caption2};
    right: 0;
    top: 1.65rem;
  }
`;
