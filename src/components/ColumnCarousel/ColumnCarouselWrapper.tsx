import { ColorCarouselComponent } from './ColorCarouselComponent';
import * as S from './ColumnCarousel.style';
import { ConnectCarouselComponent } from './ConnectCarouselComponent';
import { GigaCarouselComponent } from './GigaCarouselComponent';
import { ModelCarouselComponent } from './ModelCarouselComponent';

export const ColumnCarouselWrapper = () => {
  return (
    <S.Wrapper>
      <ModelCarouselComponent />
      <ColorCarouselComponent />
      <GigaCarouselComponent />
      <ConnectCarouselComponent />
    </S.Wrapper>
  );
};
