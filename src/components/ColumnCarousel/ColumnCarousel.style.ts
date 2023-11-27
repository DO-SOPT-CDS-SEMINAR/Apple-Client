import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  width: 32.8rem;
`;

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const PlusContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1.2rem;
  padding: 1.6rem;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.grayScale.gray2};
  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  ${({ theme: { fonts } }) => fonts.body3_1};
  > p {
    ${({ theme: { fonts } }) => fonts.body3};
  }
`;

export const Text = styled.p`
  display: flex;
  color: ${({ theme: { colors } }) => colors.grayScale.gray5};
  ${({ theme: { fonts } }) => fonts.subheading2};
  > p {
    color: ${({ theme: { colors } }) => colors.grayScale.gray8};
    ${({ theme: { fonts } }) => fonts.subheading2};
  }
`;

export const TypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GigaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
