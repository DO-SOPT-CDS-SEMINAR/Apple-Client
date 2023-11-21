import styled from 'styled-components';

export const GnbWrapper = styled.header`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 4.4rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.gray2};
  & > svg {
    margin: 0 1.363rem;
  }
`;

export const GnbBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 1.363rem;
  padding: 0.8rem;

  color: ${({ theme: { colors } }) => colors.grayScale.black};
  font: ${({ theme: { fonts } }) => fonts.nb_en};

  cursor: pointer;
`;
