import * as S from './AddAccessory.style';

import { BuyButton } from '../../common/Button/BuyButton';
import { AddIpadproIcClose } from '../../assets/icon';
import ItemInfo from '../../components/AddAccessory/toggle/ItemInfo';
import { IpadproIcRightBlue16 } from '../../assets/icon';
import { IcSwatchSilver } from '../../assets/icon';
import { IcSwatchSpaceGray } from '../../assets/icon';
import ToggleMenu from '../../components/AddAccessory/toggle';
import ImgCarousel from '../../components/AddAccessory/ImgCarousel';

const AddAccssoryPage = () => {
  const carouselItems = {
    data: {
      name: 'iPad Pro 12.9(6세대)용 Magic Keyboard - 한국어 - 화이트',
      cost: '519,000',
      imgUrls: [
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJQL3LL?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1665602254156',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-2-202210?wid=728&hei=666&fmt=png-alpha&.v=1665083965975',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202210?wid=728&hei=666&fmt=png-alpha&.v=1664477161220',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-2-202210?wid=728&hei=666&fmt=png-alpha&.v=1665083965975',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202210?wid=728&hei=666&fmt=png-alpha&.v=1664477161220',
      ],
    },
  };
  return (
    <>
      <S.Dim></S.Dim>
      <S.Wrapper>
        <S.CloseIcon>
          <AddIpadproIcClose />
        </S.CloseIcon>
        <ToggleMenu />
        <S.Modal>
          <S.Title>꼭 필요한 것부터 알아두면 좋은 것까지.</S.Title>
          <S.ContextWrapper>
            <S.ImgWrapper>
              <ImgCarousel imgUrls={carouselItems.data.imgUrls} />
              <S.ItemInfo>
                <p>2개의 색상 제공</p>
                <div>
                  <IcSwatchSilver />
                  <IcSwatchSpaceGray />
                </div>
              </S.ItemInfo>
            </S.ImgWrapper>
            <S.ContextText>
              <S.SubTitle>{carouselItems.data.name}</S.SubTitle>
              <S.PriceWrapper>
                <p>￦{carouselItems.data.cost}</p>
                <BuyButton>구입하기</BuyButton>
              </S.PriceWrapper>
              <ItemInfo />
              <S.BuyBtn>
                <p>더 살펴보기</p>
                <IpadproIcRightBlue16 />
              </S.BuyBtn>
            </S.ContextText>
          </S.ContextWrapper>
        </S.Modal>
      </S.Wrapper>
    </>
  );
};

export default AddAccssoryPage;
