import * as S from './AddAccessory.style';

import { BuyButton } from '../../common/Button/BuyButton';
import { AddIpadproIcClose } from '../../assets/icon';
// import { PageController } from '../../common/PageController';

const AddAccssoryPage = () => {
  return (
    <S.Dim>
      <S.CloseIcon>
        <AddIpadproIcClose />
      </S.CloseIcon>
      <S.Modal>
        <S.Title>꼭 필요한 것부터 알아두면 좋은 것까지.</S.Title>
        <S.ContextWrapper>
          <S.ModalImg>{/* <PageController /> */}</S.ModalImg>
          <S.ContextText>
            <S.SubTitle>iPad Pro 12.9(6세대)용 Magic Keyboard - 한국어 - 화이트</S.SubTitle>
            <S.PriceWrapper>
              <p>￦519,000</p>
              <BuyButton>구입하기</BuyButton>
            </S.PriceWrapper>
          </S.ContextText>
        </S.ContextWrapper>
      </S.Modal>
    </S.Dim>
  );
};

export default AddAccssoryPage;
