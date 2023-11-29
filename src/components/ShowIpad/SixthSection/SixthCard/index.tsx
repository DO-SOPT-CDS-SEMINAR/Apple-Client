import { useState } from 'react';
import * as S from './SixthCard.style';
import HoveredProduct from '../../../../common/HoveredProduct';

interface IpadProductsProps {
  id: number;
  subTitle: string;
  title: string[];
  imgUrl: string;
  whiteColor?: boolean;
  isFirstCard?: boolean;
}

const SixthCard = ({ subTitle, title, imgUrl, whiteColor, isFirstCard }: IpadProductsProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <S.SixthCardContainer
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered &&
        (isFirstCard ? (
          <HoveredProduct width={48} height={50} borderRadius={1.8} />
        ) : (
          <HoveredProduct width={48} height={24} borderRadius={1.8} />
        ))}

      <S.CardContainer $isFirstCard={isFirstCard}>
        <S.CardTitleContainer>
          <S.SubTitle $whiteColor={whiteColor} $isHovered={isHovered}>
            {subTitle}
          </S.SubTitle>
          {title.map((it, idx) => {
            return (
              <S.Title key={idx} $whiteColor={whiteColor} $isHovered={isHovered}>
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
