import * as S from './MainFooter.style';

const MainFooter = () => {
  return (
    <S.FooterWrapper>
      <p>빠른링크</p>
      <S.BtnWrapper>
        <S.Btn>주문상태</S.Btn>
        <S.Btn>쇼핑도움말</S.Btn>
        <S.Btn>반품</S.Btn>
        <S.Btn>관심목록</S.Btn>
      </S.BtnWrapper>
    </S.FooterWrapper>
  );
};

export default MainFooter;
