import { ColorTypeButton } from '../../common/Button/ColorTypeButton';
import { IcSwatchSpaceGray } from '../../assets/icon';
import { IcSwatchSilver } from '../../assets/icon';
import * as S from './ColumnCarousel.style';

export const ColorCarouselComponent = () => {
  return (
    <S.ComponentWrapper>
      <S.Text>색상. 맘에 드는 색상을 선택하세요.</S.Text>
      <S.TypeWrapper>
        <ColorTypeButton ColorComponent={IcSwatchSpaceGray}>스페이스 그레이</ColorTypeButton>
        <ColorTypeButton ColorComponent={IcSwatchSilver}>실버</ColorTypeButton>
      </S.TypeWrapper>
    </S.ComponentWrapper>
  );
};
