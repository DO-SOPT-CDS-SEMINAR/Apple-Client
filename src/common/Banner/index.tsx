import * as S from './Banner.style';

import { IpadproIcLeft24 } from '../../assets/icon';
import { IpadproIcRightBlack24 } from '../../assets/icon';
import { IpadproIcRightBlue16 } from '../../assets/icon';

const Banner = () => {
  return (
    <>
      <S.BannerWrapper>
        <IpadproIcLeft24 />
        <S.BannerText>
          <S.Text>신용카드 결제 시 최대 12개월 할부 적용 가능. ²</S.Text>
          <S.Button>
            더 알아보기
            <IpadproIcRightBlue16 />
          </S.Button>
        </S.BannerText>
        <IpadproIcRightBlack24 />
      </S.BannerWrapper>
    </>
  );
};

export default Banner;
