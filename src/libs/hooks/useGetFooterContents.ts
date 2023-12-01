import { useEffect, useState } from 'react';
import API from '../api';

interface DataProps {
  id: number;
  content: string;
}

const useGetFooterContetnts = () => {
  const [res, setRes] = useState<Array<DataProps> | undefined>();

  const getContents = async () => {
    try {
      const res = await API.get(`/main/information`);
      setRes(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getContents();
  }, []);

  return { res };
};

export default useGetFooterContetnts;
