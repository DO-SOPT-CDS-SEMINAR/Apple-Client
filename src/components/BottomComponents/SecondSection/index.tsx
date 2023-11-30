// import { IpadproIcRightBlue16 } from '../../../../assets/icon';
// import { CARD_CONTENTS } from '../../../../constant/ipadProCard';
import * as S from './SecondSection.style';

const SecondSection = () => {
  return (
    <S.SecondSectionContainer>
      <S.TitleContainer>
        <S.Title>그 밖에도 많은 가능성.</S.Title>
        <S.SubTitle>
          iPad Pro 구입 시 다양한 서비스를 3개월 무료로 이용할 수 있습니다.***
        </S.SubTitle>
      </S.TitleContainer>

      <S.ContentsContainer>
        {/* {CARD_CONTENTS.map((card, idx) => {
          return (
            <S.CardContainer key={idx}>
              {card.exImg}

              {card.icImg}
              <S.Name>{card.name}</S.Name>
              <S.DescriptionContainer>
                {card.descriprion.map((desc, idx) => {
                  return <S.Description key={idx}>{desc}</S.Description>;
                })}
              </S.DescriptionContainer>

              <S.MoreInfo>
                <S.Text>더 알아보기</S.Text>
                <IpadproIcRightBlue16 />
              </S.MoreInfo>
            </S.CardContainer>
          );
        })} */}
      </S.ContentsContainer>
    </S.SecondSectionContainer>
  );
};

export default SecondSection;
