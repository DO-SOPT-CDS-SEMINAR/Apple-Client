import { useEffect, useState } from 'react';
import API from '../api';

interface DataProps {
  productName: string;
  productCost: string;
  productImgUrl: string;
  productSubName?: string;
}

const useGetIpad = () => {
  const [res, setRes] = useState<Array<DataProps> | undefined>();

  const getIpad = async () => {
    try {
      const res = await API.get(`/product/3/items`);
      setRes(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIpad();
  }, []);

  return { res };
};

export default useGetIpad;
