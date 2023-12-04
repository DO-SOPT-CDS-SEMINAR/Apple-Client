import axios from 'axios';
import { DisplayTypeButton } from '../../common/Button/DisplayTypeButton';
import * as S from './ColumnCarousel.style';

export const ModelCarouselComponent = () => {
  const API_URL = import.meta.env.VITE_APP_BASE_URL;

  const handleButtonClick = async (productId: number, sizeId: number) => {
    try {
      const res = await axios.post(`${API_URL}/product/${productId}/${sizeId}/accessory`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.ComponentWrapper>
      <S.Text>모델. 원하는 사이즈와 디스플레이를 선택하세요.</S.Text>
      <DisplayTypeButton
        title='11형 디스플레이'
        subtext='Liquid Retina 디스플레이'
        price={1249000}
        onClick={() => handleButtonClick(1, 1)}
      />
      <DisplayTypeButton
        title='12.9형 디스플레이'
        subtext='Liquid Retina XDR 디스플레이'
        price={1729000}
        onClick={() => handleButtonClick(1, 2)}
      />
      <S.PlusContent>
        <p>모델 선택에 도움이 필요하신가요?</p>27.9cm 디스플레이는 언제 어디서든 몰입감 넘치는
        경험을 선사하고, 32.8cm XDR 디스플레이는 HDR 콘텐츠를 숨막히도록 멋지고 더욱 널찍한 화면에서
        보여주죠.
      </S.PlusContent>
    </S.ComponentWrapper>
  );
};
