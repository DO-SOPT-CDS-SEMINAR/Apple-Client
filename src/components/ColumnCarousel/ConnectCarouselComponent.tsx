import { DisplayTypeButton } from '../../common/Button/DisplayTypeButton';
import { GigaTypeButton } from '../../common/Button/GigaTypeButton';
import * as S from './ColumnCarousel.style';

export const ConnectCarouselComponent = () => {
  return (
    <S.ComponentWrapper>
      <S.Text>색상. 맘에 드는 색상을 선택하세요.</S.Text>
      <DisplayTypeButton
        title='Wi-Fi'
        subtext='모든 iPad는 Wi-Fi 연결을 지원해 
언제나 소통을 이어갈 수 있습니다.'
        price={1249000}
      />
      <DisplayTypeButton
        title='Wi-Fi + Celluar'
        subtext='Wi-Fi + Cellular 모델은 Wi-Fi 
        연결이 불가능한 환경에서도 인터넷에  
        연결할 수 있죠.'
        price={1249000}
      />
      <S.PlusContent>
        <p>용량이 얼마나 필요할지 확실피 않으신가요?</p>iPad Pro의 저장 용량의 클수록 지금은 물론
        앞으로도 더 많은 디지털 콘텐츠를 저장할 수 있습니다.
      </S.PlusContent>
    </S.ComponentWrapper>
  );
};
