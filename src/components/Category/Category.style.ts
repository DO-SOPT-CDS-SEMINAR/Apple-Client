import styled from 'styled-components';

export const List = styled.section`
  display: flex;
  justify-content: center; // Add this line to center the content horizontally

  width: 100vw;
  height: 23.6rem;
  padding-top: 1rem;

  background-color: ${({ theme: { colors } }) => colors.grayScale.gray2};

  
  }

`;

export const ListComponent = styled.div`
  width: 13.6rem;
  height: 14.8rem;
  margin: 0 0.25rem;

  & > div {
    width: 12rem;
    height: 7.8rem;
    margin: 1.6rem 0.8rem;

    background-color: ${({ theme: { colors } }) => colors.grayScale.gray3};
  }

  & > p {
    width: 12rem;
    text-align: center;
    margin: 0rem 0.8rem;

    color: ${({ theme: { colors } }) => colors.grayScale.gray8};

    font: ${({ theme: { fonts } }) => fonts.body3};
  }
`;
