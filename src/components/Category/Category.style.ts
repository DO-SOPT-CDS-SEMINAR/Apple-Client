import styled from 'styled-components';

export const CategoryWrapper = styled.section`
  justify-content: center;
  display: flex;

  width: 100vw;
  height: 23.6rem;
  padding-top: 1rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.gray2};
`;

export const ListItemContainer = styled.div`
  width: 13.6rem;
  height: 14.8rem;
  margin: 0 0.25rem;

  cursor: pointer;
`;

export const ListName = styled.p`
  width: 12rem;
  text-align: center;
  margin: 0rem 0.8rem;

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};

  ${({ theme: { fonts } }) => fonts.body3};
`;

export const imgUrl = styled.img`
  width: 12rem;
  height: 7.8rem;
  margin: 1.6rem 0.8rem;
`;
