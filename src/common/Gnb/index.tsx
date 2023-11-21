import * as S from './Gnb.style';

// import { ReactComponent as GnbIcApple } from '../../assets/icon/gnb_ic_apple.svg';
// import { ReactComponent as GnbIcSearch } from '../../assets/icon/gnb_ic_search.svg';
// import { ReactComponent as GnbIcShop } from '../../assets/icon/gnb_ic_shop.svg';

const Gnb = () => {
  return (
    <S.GnbWrapper>
      {/* <GnbIcApple /> */}
      <S.GnbBtn>스토어</S.GnbBtn>
      <S.GnbBtn>Mac</S.GnbBtn>
      <S.GnbBtn>iPad</S.GnbBtn>
      <S.GnbBtn>iPhone</S.GnbBtn>
      <S.GnbBtn>Watch</S.GnbBtn>
      <S.GnbBtn>Airpods</S.GnbBtn>
      <S.GnbBtn>TV 및 홈</S.GnbBtn>
      <S.GnbBtn>엔터테인먼트</S.GnbBtn>
      <S.GnbBtn>악세사리</S.GnbBtn>
      <S.GnbBtn>고객지원</S.GnbBtn>
      {/* <GnbIcSearch />
      <GnbIcShop /> */}
    </S.GnbWrapper>
  );
};

export default Gnb;
