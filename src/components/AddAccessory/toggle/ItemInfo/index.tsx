import * as S from './ItemInfo.style';
import { MODAL_DATA } from '../../../../constant/modalInfo';

const ItemInfo = () => {
  return (
    <>
      {MODAL_DATA.map((item) => (
        <S.InfoWrapper key={item.id} $isLast={item.id === 5}>
          <S.Icon>{item.icon}</S.Icon>
          <S.Text>{item.text}</S.Text>
        </S.InfoWrapper>
      ))}
    </>
  );
};

export default ItemInfo;
