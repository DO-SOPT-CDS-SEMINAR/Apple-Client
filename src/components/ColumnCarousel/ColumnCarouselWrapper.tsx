import { ColorCarouselComponent } from './ColorCarouselComponent';
import * as S from './ColumnCarousel.style';
import { GigaCarouselComponent } from './GigaCarouselComponent';
import { ModelCarouselComponent } from './ModelCarouselComponent';

export const ColumnCarouselWrapper = () => {
  return (
    <S.Wrapper>
      <ModelCarouselComponent />
      <ColorCarouselComponent />
      <GigaCarouselComponent />
    </S.Wrapper>
  );
};
