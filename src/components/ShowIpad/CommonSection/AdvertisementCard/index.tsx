import * as S from './AdvertisementCard.style';

interface IpadProductsProps {
  subTitle: string;
  title: string[];
  imgUrl: string;
}

const AdevertisementCard = ({ subTitle, title, imgUrl }: IpadProductsProps) => {
  return (
    <S.CardContainer>
      <S.CardTitleContainer>
        <S.SubTitle>{subTitle}</S.SubTitle>
        {title.map((it, idx) => {
          return <S.Title key={idx}>{it}</S.Title>;
        })}
      </S.CardTitleContainer>

      <S.CardImg src={imgUrl} alt={`${subTitle}`} />
    </S.CardContainer>
  );
};

export default AdevertisementCard;
