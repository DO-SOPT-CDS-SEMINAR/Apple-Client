import * as S from './Category.style';

interface ListItemProps {
  idx: number;
  ListName: string;
  imgUrl: string;
}

const ListItem = ({ ListName, imgUrl }: ListItemProps) => {
  return (
    <S.ListItemContainer>
      <S.ListName>{ListName}</S.ListName>
      <S.imgUrl src={imgUrl} alt='itemImage'></S.imgUrl>
    </S.ListItemContainer>
  );
};

export default ListItem;
