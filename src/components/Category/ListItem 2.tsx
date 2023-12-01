import * as S from './Category.style';
import { useNavigate } from 'react-router-dom';

interface ListItemProps {
  idx: number;
  ListName: string;
  imgUrl: string;
}

const ListItem = ({ ListName, imgUrl }: ListItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (ListName === 'iPad') {
      navigate('/iPad');
    }
  };
  return (
    <S.ListItemContainer onClick={handleClick}>
      <S.imgUrl src={imgUrl} alt='itemImage'></S.imgUrl>
      <S.ListName>{ListName}</S.ListName>
    </S.ListItemContainer>
  );
};

export default ListItem;
