import { IpadIcRight, IpadImgChatSpecialist, MainIcPinstore } from '../../../assets/icon';
import * as S from './PageHeader.style';

const PageHeader = () => {
  return (
    <S.PageHeaderContainer>
      <S.HeadText>iPad 쇼핑하기</S.HeadText>

      <S.IconContainer>
        <S.SpecialListContainer>
          <IpadImgChatSpecialist />

          <S.TextContainer>
            <S.Title>쇼핑지원이 필요하다면?</S.Title>
            <S.Description>스페셜리스트에게 문의하세요</S.Description>
          </S.TextContainer>
        </S.SpecialListContainer>

        <S.StoreContainer>
          <MainIcPinstore />

          <S.TextContainer>
            <S.Title>Apple Store를 방문하세요</S.Title>
            <S.DescriptionContainer>
              <S.Description>가까운 매장찾기</S.Description>
              <IpadIcRight />
            </S.DescriptionContainer>
          </S.TextContainer>
        </S.StoreContainer>
      </S.IconContainer>
    </S.PageHeaderContainer>
  );
};

export default PageHeader;
