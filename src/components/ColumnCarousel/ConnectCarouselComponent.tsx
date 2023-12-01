import { DisplayTypeButton } from '../../common/Button/DisplayTypeButton';
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
        <p>Wi-Fi + Cellular 모델에 대해 더 알아보시겠어요?</p>Wi-Fi 연결이 불가능한 환경에서도
        Wi-Fi+Celluar 모델만 있으면 셀룰러 데이터 요금제에 가입해 인터넷 연결을 유지할 수 있죠.
        Wi-Fi + Cellular 모델을 구입하시고 나면 셀룰러 연결을 설정해야합니다.
      </S.PlusContent>
    </S.ComponentWrapper>
  );
};
