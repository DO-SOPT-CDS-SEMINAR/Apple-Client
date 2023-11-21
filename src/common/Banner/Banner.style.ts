import styled from 'styled-components';

export const BannerWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 8.2rem;
  padding: 1.6rem;

  color: ${({ theme: { colors } }) => colors.grayScale.white};
`;

export const BannerText = styled.div`
  display: flex;
  align-items: center;
  vertical-align: center;

  height: 2.2rem;
  margin: 0 28.2rem;
  padding: 0.1rem 0;

  & > p {
    color: ${({ theme: { colors } }) => colors.grayScale.gray8};

    font: ${({ theme: { fonts } }) => fonts.body3_2};

    cursor: pointer;
  }

  & > button {
    display: flex;

    padding: 0 0 0 0.5rem;

    color: ${({ theme: { colors } }) => colors.pointColor.blue0};

    font: ${({ theme: { fonts } }) => fonts.body3_2};

    cursor: pointer;
  }
`;
