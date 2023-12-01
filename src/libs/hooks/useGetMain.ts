import { useEffect, useState } from 'react';
import API from '../api';

interface DataProps {
  mainItemAsset: number;
  mainItemName: string;
  mainItemPrice: string;
  mainCategoryImg: string;
}

const useGetMain = () => {
  const [res, setRes] = useState<Array<DataProps> | undefined>();

  const getMain = async () => {
    try {
      const res = await API.get('/main/items');
      setRes(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMain();
  }, []);

  return { res };
};

export default useGetMain;
