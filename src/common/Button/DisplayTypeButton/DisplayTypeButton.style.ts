import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: space-between;

  padding: 1.5rem;
  border-radius: 1.2rem;
  width: 32.8rem;

  border: 0.1rem solid ${({ theme: { colors } }) => colors.grayScale.gray5};
  ${({ theme: { colors } }) => colors.grayScale.gray8};

  &:focus {
    border-color: ${({ theme: { colors } }) => colors.pointColor.blue0};
  }
  &:disabled {
    border-color: ${({ theme: { colors } }) => colors.grayScale.gray3};
    color: ${({ theme: { colors } }) => colors.grayScale.gray5};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.6rem;
`;

export const Title = styled.p`
  ${({ theme: { fonts } }) => fonts.body1};
`;

export const SubText = styled.p`
  ${({ theme: { fonts } }) => fonts.caption2};
`;

export const Price = styled.p`
  ${({ theme: { fonts } }) => fonts.caption2};
`;
