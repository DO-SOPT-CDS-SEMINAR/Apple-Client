import * as S from './AdvertisementCard.style';

interface IpadProductsProps {
  subTitle: string;
  title: string[];
  imgUrl: string;
  whiteColor: boolean;
  section: number;
}

const AdevertisementCard = ({
  subTitle,
  title,
  imgUrl,
  whiteColor,
  section,
}: IpadProductsProps) => {
  return (
    <S.CardContainer $isSection8={section === 8}>
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

      <S.CardImg src={imgUrl} alt={`${subTitle}`} $isSection8={section === 8} />
    </S.CardContainer>
  );
};

export default AdevertisementCard;
