/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { IpadproIcLeftCircleNormal, IpadproIcRightCircleNormal } from '../../assets/icon';
import * as S from './IpadType.style';
import { useEffect, useState } from 'react';

const IpadType = () => {
  const API_URL = import.meta.env.VITE_APP_BASE_URL;
  const [imageIndex, setImageIndex] = useState<number>(0); // 이미지 인덱스 상태 추가
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/product/1/images`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const urls = response.data.data.map((item: any) => item.productImgUrl);
        setImageUrls(urls);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [API_URL]);

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrevImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
  };

  return (
    <S.Container>
      <div>{imageUrls.length > 0 && <S.Img src={imageUrls[imageIndex]} />}</div>
      <S.Button onClick={handlePrevImage}>
        <IpadproIcLeftCircleNormal />
      </S.Button>
      <S.Button onClick={handleNextImage}>
        <IpadproIcRightCircleNormal />
      </S.Button>
    </S.Container>
  );
};

export default IpadType;
