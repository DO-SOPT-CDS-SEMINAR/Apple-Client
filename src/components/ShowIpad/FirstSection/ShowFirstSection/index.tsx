import * as S from './ShowFirstSection';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ShowIpadHeader from '../../Header';
import IpadProducts from '../IpadProducts';
import CommonSwiper from '../../CommonSwiper';
import { useEffect, useState } from 'react';
import API from '../../../../libs/api';

interface DataProps {
  productName: string;
  productCost: string;
  productImgUrl: string;
  productSubName?: string;
}

const ShowFirstSection = () => {
  const [data, setData] = useState<Array<DataProps> | undefined>();

  const getItems = async () => {
    try {
      const res = await API.get(`/product/3/items`);
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <S.ShowFirstSectionContainer>
      <ShowIpadHeader title='모든 모델.' subTitle='당신의 선택은?' />
      <CommonSwiper>
        {data &&
          data.map((item: DataProps, idx: number) => {
            return (
              <SwiperSlide key={idx}>
                <IpadProducts
                  idx={idx}
                  productName={item.productName}
                  productSubName={item.productSubName}
                  imgUrl={item.productImgUrl}
                  price={item.productCost}
                />
              </SwiperSlide>
            );
          })}
      </CommonSwiper>
    </S.ShowFirstSectionContainer>
  );
};

export default ShowFirstSection;
