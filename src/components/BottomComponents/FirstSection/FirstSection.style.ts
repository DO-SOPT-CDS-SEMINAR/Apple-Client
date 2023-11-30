import styled from 'styled-components';

export const FirstSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FirstSectionHeader = styled.p`
  margin: 10rem 0 4rem;

  color: ${({ theme: { colors } }) => colors.grayScale.black};
  ${({ theme: { fonts } }) => fonts.heading2};
`;

export const ContentsContainer = styled.article`
  display: flex;
  flex-direction: column;

  gap: 2.4rem;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 93.4rem;
  height: 33.9rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.gray1};

  gap: 9.3rem;
`;

export const TextContainer = styled.div`
  display: flex;

  margin-bottom: 1.6rem;
`;

export const FirstText = styled.p`
  display: flex;
  justify-content: center;
  width: 40.7rem;

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.body3_1};
`;

export const SecondText = styled.p`
  display: flex;
  justify-content: center;
  width: 17.8rem;

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.body3_1};
`;

export const ThirdText = styled.p`
  display: flex;
  justify-content: center;
  width: 34.9rem;

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.body3_1};
`;
