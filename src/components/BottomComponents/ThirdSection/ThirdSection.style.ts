import styled, { css } from 'styled-components';

interface DescriptionProps {
  $isPrice?: boolean;
}

interface ContainerProps {
  $height?: number;
}

export const ThirdSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 11rem;
`;

export const ThirdSectionHeader = styled.header`
  margin: 10rem 0 4rem;

  color: ${({ theme: { colors } }) => colors.grayScale.black};
  ${({ theme: { fonts } }) => fonts.heading2};
`;

export const ContentsContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2.2rem;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div`
  margin-top: 4rem;
`;

export const IpadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 16.9rem;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 13.2rem;
  padding: 2rem 0 4rem;
  border-bottom: 0.1rem solid ${({ theme: { colors } }) => colors.grayScale.gray5};
`;

export const Name = styled.p`
  margin-bottom: 2.4rem;

  color: ${({ theme: { colors } }) => colors.grayScale.black};
  ${({ theme: { fonts } }) => fonts.subheading2};
`;

export const Description = styled.p<DescriptionProps>`
  margin-top: ${({ $isPrice }) => $isPrice && css`4rem`};

  flex-wrap: wrap;
  word-break: keep-all;
  text-align: center;

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.body3_1};
`;

export const Price = styled.p`
  margin-top: 4rem;

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.body3_1};
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${({ $height }) =>
    $height &&
    css`
      ${$height}rem
    `};

  padding: 4rem 0 1rem;

  & > svg {
    margin-bottom: -0.4rem;
  }
`;

export const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 1.2rem;

  gap: 1.2rem;
`;

export const Size = styled.p`
  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.subheading4};
`;

export const Text = styled.p`
  width: calc(100% - 2rem);

  margin-top: 1.2rem;

  flex-wrap: wrap;
  word-break: keep-all;
  text-align: center;

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.caption2};
`;
