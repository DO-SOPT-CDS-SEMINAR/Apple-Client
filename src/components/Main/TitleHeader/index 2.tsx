import * as S from './TitleHeader.style';
import { MainIcPinstore } from '../../../assets/icon';
import { MainImgChatSpecialist } from '../../../assets/icon';
import { IpadproIcRightBlue16 } from '../../../assets/icon';

const TitleHeader = () => {
  return (
    <S.CategorySec>
      <h1>
        <S.Point>스토어,</S.Point> 최고의 연말연시.설렘의 시작
      </h1>
      <S.MoreInfoWrapper>
        <div>
          <MainIcPinstore />
          <S.Plus>
            <p>쇼핑지원이 필요하다면?</p>
            <S.Button>스페셜리스트에게 문의하세요</S.Button>
          </S.Plus>
        </div>
        <div>
          <MainImgChatSpecialist />
          <S.Plus>
            <p>Apple Store를 방문하세요</p>
            <S.Button>
              가까운 매장찾기
              <IpadproIcRightBlue16 />
            </S.Button>
          </S.Plus>
        </div>
      </S.MoreInfoWrapper>
    </S.CategorySec>
  );
};

export default TitleHeader;
