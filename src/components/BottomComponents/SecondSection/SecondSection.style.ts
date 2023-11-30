import styled from 'styled-components';

export const SecondSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 10rem 0 4rem;

  gap: 1.6rem;
`;

export const Title = styled.p`
  color: ${({ theme: { colors } }) => colors.grayScale.black};
  ${({ theme: { fonts } }) => fonts.heading2};
`;

export const SubTitle = styled.p`
  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.body1_2};
`;

export const ContentsContainer = styled.div`
  display: flex;

  gap: 2.2rem;
`;

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;

  width: 45.6rem;
  height: 45.6rem;
  border-radius: 2rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.black};
  & > svg:nth-child(1) {
    margin: 4rem 0 2.6rem;
  }

  & > svg:nth-child(2) {
    margin-bottom: 1.6rem;
  }
`;

export const Name = styled.p`
  margin-bottom: 0.8rem;

  color: ${({ theme: { colors } }) => colors.grayScale.white};
  ${({ theme: { fonts } }) => fonts.subheading2};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 1.6rem;
`;

export const Description = styled.p`
  color: ${({ theme: { colors } }) => colors.grayScale.white};
  ${({ theme: { fonts } }) => fonts.body3_1};
`;

export const MoreInfo = styled.div`
  display: flex;

  gap: 0.4rem;
`;

export const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.pointColor.blue0};
  ${({ theme: { fonts } }) => fonts.caption2};
`;
