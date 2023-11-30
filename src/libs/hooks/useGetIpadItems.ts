import { useEffect, useState } from 'react';
import API from '../api';

export interface IpadItemProps {
  productAsset: number;
  productName: string;
  productCost: string | null;
  productImgUrl: string;
}

const useGetIpadItems = () => {
  const [res, setRes] = useState<Array<IpadItemProps>>();

  const getIpadItems = async () => {
    try {
      const res = await API.get(`/ipad/items`);
      setRes(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIpadItems();
  }, []);

  return { res };
};

export default useGetIpadItems;
