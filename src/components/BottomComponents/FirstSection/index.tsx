// import { ImgIpadproAdapter, ImgIpadproCtype, ImgIpadproIpad } from '../../../../assets/icon';
import * as S from './FirstSection.style';

const FirstSection = () => {
  return (
    <S.FirstSectionContainer>
      <S.FirstSectionHeader>제품 구성</S.FirstSectionHeader>
      <S.ContentsContainer>
        <S.ImgContainer>
          {/* <ImgIpadproIpad />
          <ImgIpadproCtype />
          <ImgIpadproAdapter /> */}
        </S.ImgContainer>

        <S.TextContainer>
          <S.FirstText>iPad Pro 11</S.FirstText>
          <S.SecondText>USB-C 충전 케이블</S.SecondText>
          <S.ThirdText>20W USB-C 전원 어댑터</S.ThirdText>
        </S.TextContainer>
      </S.ContentsContainer>
    </S.FirstSectionContainer>
  );
};

export default FirstSection;
