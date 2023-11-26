import * as S from './Category.style';

const DUMMY = [
  {
    id: 1,
    listName: 'Mac',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437',
  },
  {
    id: 2,
    listName: 'iPhone',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437',
  },
  {
    id: 3,
    listName: 'iPad',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437',
  },
  {
    id: 4,
    listName: 'Apple Watch',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437',
  },
  {
    id: 5,
    listName: 'AirPods',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437',
  },
  {
    id: 6,
    listName: 'AirTag',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437',
  },
  {
    id: 7,
    listName: 'Apple TV 4K',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437',
  },
  {
    id: 8,
    listName: '악세사리',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437',
  },
];

const Category = () => {
  return (
    <S.List>
      {DUMMY.map((item) => {
        return (
          <S.ListComponent
            key={item.id}
            idx={item.id}
            listName={item.listName}
            imgUrl={item.imgUrl}
          />
        );
      })}
    </S.List>
  );
};

export default Category;
