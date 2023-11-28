import * as S from './EighthCard.style';

interface IpadProductsProps {
  subTitle: string;
  title: string[];
  imgUrl: string;
  whiteColor: boolean;
}

const EighthCard = ({ subTitle, title, imgUrl, whiteColor }: IpadProductsProps) => {
  return (
    <S.CardContainer>
      <S.CardTitleContainer>
        <S.SubTitle $whiteColor={whiteColor}>{subTitle}</S.SubTitle>
        {title.map((it, idx) => {
          return (
            <S.Title key={idx} $whiteColor={whiteColor}>
              {it}
            </S.Title>
          );
        })}
      </S.CardTitleContainer>

      <S.CardImg src={imgUrl} alt={`${subTitle}`} />
    </S.CardContainer>
  );
};

export default EighthCard;
