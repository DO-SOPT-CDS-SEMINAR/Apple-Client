/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IpadproIcLeftCircleNormal, IpadproIcRightCircleNormal } from '../../assets/icon';
import * as S from './IpadType.style';
import { useEffect, useState } from 'react';

const IpadType = () => {
  const API_URL = import.meta.env.VITE_APP_BASE_URL;
  const [imageIndex, setImageIndex] = useState<number>(0);
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

  const handleSelectImage = (selectedIndex: number) => {
    setImageIndex(selectedIndex);
  };

  const handlePrevImage = () => {
    const newIndex = (imageIndex - 1 + imageUrls.length) % imageUrls.length;
    setImageIndex(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = (imageIndex + 1) % imageUrls.length;
    setImageIndex(newIndex);
  };

  return (
    <S.ParentContainer>
      <S.Container>
        {imageUrls.length > 0 && (
          <Carousel
            selectedItem={imageIndex}
            onChange={handleSelectImage}
            showArrows={false}
            showThumbs={false}
          >
            {imageUrls.map((imageUrl, index) => (
              <S.CarouselContainer key={index}>
                <S.ImgContainer>
                  <S.Img src={imageUrl} />
                </S.ImgContainer>
              </S.CarouselContainer>
            ))}
          </Carousel>
        )}
      </S.Container>
      <S.ButtonLeft
        onClick={handlePrevImage}
        style={{ display: imageIndex === 0 ? 'none' : 'block' }}
      >
        <IpadproIcLeftCircleNormal />
      </S.ButtonLeft>
      <S.ButtonRight
        onClick={handleNextImage}
        style={{ display: imageIndex === imageUrls.length - 1 ? 'none' : 'block' }}
      >
        <IpadproIcRightCircleNormal />
      </S.ButtonRight>
    </S.ParentContainer>
  );
};

export default IpadType;
