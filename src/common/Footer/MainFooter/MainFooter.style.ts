import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 98rem;
  margin: 0 auto;

  & > p {
    margin-top: 6.7rem;
    color: ${({ theme: { colors } }) => colors.grayScale.black};
    ${({ theme: { fonts } }) => fonts.subheading1};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  height: 4.6rem;
  margin: 2rem 0 3.7rem 0;
`;

export const Btn = styled.button`
  padding: 0rem 1.5rem;
  margin-right: 0.8rem;
  height: 3.6rem;

  ${({ theme: { fonts } }) => fonts.body3_2};
  background-color: ${({ theme: { colors } }) => colors.grayScale.gray4};

  border-radius: 1.8rem;
`;
