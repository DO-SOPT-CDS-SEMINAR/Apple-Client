import { useEffect, useState } from 'react';
import API from '../../libs/api';
import * as S from './Category.style';
import ListItem from './ListItem';

interface CategoryProps {
  mainCategoryId: number;
  mainCategoryName: string;
  mainCategoryImg: string;
}

const Category = () => {
  const [data, setData] = useState<CategoryProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get('https://api.sopt-cds-web8.p-e.kr/main/category');
        setData(response.data.data);
      } catch (error) {
        console.error(error, data);
      }
    };

    fetchData();
  });

  return (
    <S.CategoryWrapper>
      {data.map((item) => {
        return (
          <ListItem
            key={item.mainCategoryId}
            idx={item.mainCategoryId}
            ListName={item.mainCategoryName}
            imgUrl={item.mainCategoryImg}
          />
        );
      })}
    </S.CategoryWrapper>
  );
};

export default Category;
