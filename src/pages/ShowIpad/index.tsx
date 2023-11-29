import * as S from './ShowIpad.style';
import ShowCommonSection from '../../components/ShowIpad/CommonSection/ShowCommonSection';
import ShowFirstSection from '../../components/ShowIpad/FirstSection/ShowFirstSection';
import ShowFifthSection from '../../components/ShowIpad/FifthSection/ShowFifthSection';
// import ShowSixthSection from '../../components/ShowIpad/SixthSection/ShowSixthSection';
import PageHeader from '../../components/ShowIpad/PageHeader';
import { useEffect, useState } from 'react';
import API from '../../libs/api';
import { IPAD_COMMON_SUB_TITLE } from '../../constant/ipadSubtitle';
import { IPAD_COMMON_HEADER_TITLE } from '../../constant/ipadHeaderTitle';

export interface IpadItemProps {
  productAsset: number;
  productName: string;
  productCost: string | null;
  productImgUrl: string;
}

const ShowIpadPage = () => {
  const [ipadItems, setIpadItems] = useState<Array<IpadItemProps> | undefined>();

  const getIpadItems = async () => {
    try {
      const res = await API.get(`/ipad/items`);
      setIpadItems(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIpadItems();
  }, []);

  return (
    <S.ShowIpadPageContainer>
      <PageHeader />
      <ShowFirstSection />
      <ShowCommonSection
        section={2}
        data={ipadItems?.filter((it) => it.productAsset === 1)}
        subtitle={IPAD_COMMON_SUB_TITLE[0].subtitle}
        headerInfo={IPAD_COMMON_HEADER_TITLE.filter((it) => it.section === 2)}
      />
      <ShowCommonSection
        section={3}
        data={ipadItems?.filter((it) => it.productAsset === 2)}
        subtitle={IPAD_COMMON_SUB_TITLE[1].subtitle}
        headerInfo={IPAD_COMMON_HEADER_TITLE.filter((it) => it.section === 3)}
      />
      <ShowCommonSection
        section={4}
        data={ipadItems?.filter((it) => it.productAsset === 3)}
        subtitle={IPAD_COMMON_SUB_TITLE[2].subtitle}
        headerInfo={IPAD_COMMON_HEADER_TITLE.filter((it) => it.section === 4)}
      />
      <ShowFifthSection data={ipadItems?.filter((it) => it.productAsset === 4)} />
      {/* <ShowSixthSection data={ipadItems?.filter((it) => it.productAsset === 5)}/> */}
      <ShowCommonSection
        section={7}
        data={ipadItems?.filter((it) => it.productAsset === 6)}
        subtitle={IPAD_COMMON_SUB_TITLE[3].subtitle}
        headerInfo={IPAD_COMMON_HEADER_TITLE.filter((it) => it.section === 7)}
      />
      <ShowCommonSection
        section={8}
        data={ipadItems?.filter((it) => it.productAsset === 7)}
        subtitle={IPAD_COMMON_SUB_TITLE[4].subtitle}
        headerInfo={IPAD_COMMON_HEADER_TITLE.filter((it) => it.section === 8)}
      />
    </S.ShowIpadPageContainer>
  );
};

export default ShowIpadPage;
