import axios from 'axios';
import { EllipseLight } from '../../assets/icon';
import * as S from './IpadType.style';
import { useEffect, useState } from 'react';

const IpadType = () => {
  const API_URL = import.meta.env.VITE_APP_BASE_URL;
  const [firstUrl, setFirstUrl] = useState('');
  const [secondUrl, setSecondUrl] = useState('');
  useEffect(() => {
    // 비동기 함수 선언

    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/product/1/images`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setFirstUrl(response.data[0]);
        setSecondUrl(response.data[1]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [API_URL]);
  return (
    <S.Container>
      <S.Img src={firstUrl} />
      <S.Img src={secondUrl} />
      <S.Button>
        <EllipseLight />
      </S.Button>
    </S.Container>
  );
};

export default IpadType;
