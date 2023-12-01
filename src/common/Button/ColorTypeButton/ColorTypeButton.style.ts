import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.5rem;
  border-radius: 1.2rem;
  gap: 0.8rem;
  width: 15.3rem;

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

export const Color = styled.p`
  ${({ theme: { fonts } }) => fonts.caption2};
`;
