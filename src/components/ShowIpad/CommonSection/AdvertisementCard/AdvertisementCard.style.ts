/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const CardContainer = styled.article`
  display: flex;

  width: 48rem;
  height: 50rem;

  border-radius: 1.8rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.white};
`;

export const CardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  margin-top: 3rem;
  margin-left: 3rem;

  z-index: 10;
`;

export const SubTitle = styled.p`
  margin-bottom: 0.8rem;

  color: ${({ theme: { colors } }) => colors.grayScale.gray6};
  ${({ theme: { fonts } }) => fonts.caption1}
`;

export const Title = styled.p`
  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.subheading1_1}
`;

export const CardImg = styled.img`
  position: relative;
  width: 48rem;
  height: 50rem;

  border-radius: 1.8rem;
`;
