import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 36.1rem;
  padding: 2rem 1.6rem;
  border-radius: 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray5};

  color: ${({ theme }) => theme.colors.grayScale.gray8};
  box-shadow: 0rem 0rem 0.4rem 0rem rgba(0, 113, 227, 0.8);

  cursor: pointer;
`;

export const Select = styled.div`
  display: flex;

  ${({ theme }) => theme.fonts.body1};
`;

export const DropDown = styled.div`
  display: flex;
  flex-direction: column;

  width: 36.1rem;
  max-height: 43rem;
  border-radius: 0.6rem;

  overflow-y: scroll;
  scrollbar-width: none; /* Firefox용 스크롤바 제거 */
  -ms-overflow-style: none; /* IE/Edge용 스크롤바 제거 */

  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari용 스크롤바 제거 */
  }

  box-shadow: 0rem 1rem 3rem 0rem rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.grayScale.white};
`;

export const DropDownTitle = styled.p`
  display: flex;
  padding: 0.2rem 0rem 0.2rem 1.4rem;
  ${({ theme }) => theme.fonts.body1};
`;

export const Option = styled.button`
  display: flex;
  padding: 0.2rem 0rem 0.2rem 2rem;
  ${({ theme }) => theme.fonts.body1_2};

  &:hover {
    background-color: ${({ theme }) => theme.colors.pointColor.blue2};
    color: ${({ theme }) => theme.colors.grayScale.white};
  }
`;
