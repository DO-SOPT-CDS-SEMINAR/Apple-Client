import * as S from './AddAccessory.style';
import { AddIpadproIcClose } from '../../assets/icon';

const AddAccssoryPage = () => {
  return (
    <S.Dim>
      <S.CloseIcon>
        <AddIpadproIcClose />
      </S.CloseIcon>
      <S.Modal>
        <S.Title>꼭 필요한 것부터 알아두면 좋은 것까지.</S.Title>
      </S.Modal>
    </S.Dim>
  );
};

export default AddAccssoryPage;
