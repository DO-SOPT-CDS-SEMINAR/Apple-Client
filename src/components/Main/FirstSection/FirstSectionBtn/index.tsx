// import HoveredProduct from '../../../../common/HoveredProduct';
import * as S from './FirstSectionBtn.style';

interface Product {
  mainItemName: string;
  mainItemPrice: string;
  mainCategoryImg: string;
}

const DUMMY_DATA: Product[] = [
  {
    mainItemName: 'iPhone 15 Pro',
    mainItemPrice: '₩1,550,000부터',
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696863030449',
  },
  {
    mainItemName: 'MacBook Pro',
    mainItemPrice: '₩1,550,000부터',
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696863030449',
  },
  {
    mainItemName: 'iPhone 15 Pro',
    mainItemPrice: '₩1,550,000부터',
    mainCategoryImg:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696863030449',
  },
];

const FirstSectionBtn = () => {
  return (
    <>
      {DUMMY_DATA.map((item, index) => (
        <S.Btn key={index}>
          <S.ProductInfo>
            <h2>NEW</h2>
            <h1>{item.mainItemName}</h1>
            <p>{item.mainItemPrice}</p>
          </S.ProductInfo>
          <S.ProductImg src={item.mainCategoryImg} alt={item.mainItemName}></S.ProductImg>
        </S.Btn>
      ))}
    </>
  );
};

export default FirstSectionBtn;
