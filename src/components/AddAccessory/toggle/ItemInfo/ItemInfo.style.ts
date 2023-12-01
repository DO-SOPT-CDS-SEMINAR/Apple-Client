import styled from 'styled-components';

interface InfoWrapperProps {
  $isLast?: boolean;
}

// eslint-disable-next-line prettier/prettier
export const InfoWrapper = styled.div<InfoWrapperProps>`
  display: flex;
  justify-content: space-between;

  width: 44rem;
  height: 6.1rem;
  margin-top: 1.5rem;

  border-bottom: 0.1rem solid;
  border-bottom-color: ${({ theme: { colors }, $isLast }) => {
    return $isLast ? 'transparent' : colors.grayScale.gray4;
  }};
`;

export const Icon = styled.div`
  width: 2.8rem;
  height: 2.8rem;
`;

export const Text = styled.p`
  width: 39.4rem;
  height: 4.6rem;
  margin-top: 0.2rem;

  color: ${({ theme: { colors } }) => colors.grayScale.gray8};

  ${({ theme: { fonts } }) => fonts.body2};
`;
