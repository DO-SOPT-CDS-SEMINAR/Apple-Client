import { GigaTypeButton } from '../../common/Button/GigaTypeButton';
import * as S from './ColumnCarousel.style';

export const GigaCarouselComponent = () => {
  return (
    <S.ComponentWrapper>
      <S.Text>색상. 맘에 드는 색상을 선택하세요.</S.Text>
      <S.GigaWrapper>
        <S.TypeWrapper>
          <GigaTypeButton giga={128} gigaType='GB' price={1249000} />
          <GigaTypeButton giga={256} gigaType='GB' price={1399000} />
        </S.TypeWrapper>
        <S.TypeWrapper>
          <GigaTypeButton giga={512} gigaType='GB' price={1699000} />
          <GigaTypeButton giga={1} gigaType='TB' price={2299000} />
        </S.TypeWrapper>
        <S.TypeWrapper>
          <GigaTypeButton giga={2} gigaType='TB' price={2899000} />
        </S.TypeWrapper>
      </S.GigaWrapper>
      <S.PlusContent>
        <p>용량이 얼마나 필요할지 확실피 않으신가요?</p>iPad Pro의 저장 용량의 클수록 지금은 물론
        앞으로도 더 많은 디지털 콘텐츠를 저장할 수 있습니다.
      </S.PlusContent>
    </S.ComponentWrapper>
  );
};
