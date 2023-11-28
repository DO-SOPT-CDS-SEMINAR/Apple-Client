import * as S from './SixthCard.style';

interface IpadProductsProps {
  id: number;
  subTitle: string;
  title: string[];
  imgUrl: string;
  whiteColor?: boolean;
  isFirstCard?: boolean;
}

const SixthCard = ({ subTitle, title, imgUrl, whiteColor, isFirstCard, id }: IpadProductsProps) => {
  return (
    <S.SixthCardContainer>
      <S.CardContainer $isFirstCard={isFirstCard}>
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

        <S.CardImg src={imgUrl} alt={`${subTitle}`} $isFirstCard={isFirstCard} />
      </S.CardContainer>
    </S.SixthCardContainer>
  );
};

export default SixthCard;
