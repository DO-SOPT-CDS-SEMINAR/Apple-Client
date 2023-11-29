import * as S from './ShowAllProducts.style';
import ShowIpadHeader from '../../Header';
import IpadProducts from '../IpadProducts';

// 아직 캐러셀을 구현하지 않은 관계로, 스크롤 생기지 않는 범위 내의 카드만 정의해둠.
const DUMMY = [
  {
    id: 1,
    productName: 'Ipad Pro',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-pro-202210?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1664578794100',
    price: 1249000,
  },
  {
    id: 2,
    productName: 'Ipad Air',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-pro-202210?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1664578794100',
    price: 1249000,
  },
  {
    id: 3,
    productName: 'Ipad Air',
    productSubName: '(10세대)',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-pro-202210?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1664578794100',
    price: 1249000,
  },
];

const ShowAllProducts = () => {
  return (
    <S.ShowAllProductsContainer>
      <ShowIpadHeader title='모든 모델.' subTitle='당신의 선택은?' />
      <S.ProductsContainer>
        {DUMMY.map((item) => {
          return (
            <IpadProducts
              key={item.id}
              idx={item.id}
              productName={item.productName}
              productSubName={item.productSubName}
              imgUrl={item.imgUrl}
              price={item.price}
            />
          );
        })}
      </S.ProductsContainer>
    </S.ShowAllProductsContainer>
  );
};

export default ShowAllProducts;
