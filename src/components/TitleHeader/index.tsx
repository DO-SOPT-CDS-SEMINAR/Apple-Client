import * as S from './TitleHeader.style';
import { MainIcPinstore } from '../../assets/icon';
import { MainImgChatSpecialist } from '../../assets/icon';

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
            <button>스페셜리스트에게 문의하세요</button>
          </S.Plus>
        </div>
        <div>
          <MainImgChatSpecialist />
          <S.Plus>
            <p>Apple Store를 방문하세요</p>
            <button>가까운 매장찾기</button>
          </S.Plus>
        </div>
      </S.MoreInfoWrapper>
    </S.CategorySec>
  );
};

export default TitleHeader;
