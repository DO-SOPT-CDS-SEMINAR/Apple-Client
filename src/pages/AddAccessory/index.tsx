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
              <ImgCarousel />
              <S.ItemInfo>
                <p>2개의 색상 제공</p>
                <div>
                  <IcSwatchSilver />
                  <IcSwatchSpaceGray />
                </div>
              </S.ItemInfo>
            </S.ImgWrapper>
            <S.ContextText>
              <S.SubTitle>iPad Pro 12.9(6세대)용 Magic Keyboard - 한국어 - 화이트</S.SubTitle>
              <S.PriceWrapper>
                <p>￦519,000</p>
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
