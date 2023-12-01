import { useState } from 'react';
import Gnb from '../../common/Gnb';
import useGetMain from '../../libs/hooks/useGetMain';
import { GNB_CONTENTS } from '../../constant/gnbContents';
import { MAIN_BUTTON_DATA } from '../../constant/mainButton';
import Nb from '../../common/Nb';
import Category from '../../components/Category';
import TitleHeader from '../../components/Main/TitleHeader';
import FirstSection from '../../components/Main/FirstSection';
import SecondSection from '../../components/Main/SecondSection';
import ThirdSection from '../../components/Main/ThirdSection';
import FourthSection from '../../components/Main/FourthSection';

import * as S from './Main.style';
import Footer from '../../common/Footer';
import { footerData } from '../../constant/footerData';
import MainFooter from '../../common/Footer/MainFooter';

interface FilterItemProps {
  mainItemAsset: number;
  mainItemName: string;
  mainItemPrice: string;
  mainCategoryImg: string;
}

const MainPage = () => {
  const { res: mainItemsData } = useGetMain();
  const [isClicked, setIsClicked] = useState(0);

  if (!mainItemsData) {
    return <div>loading...</div>;
  }

  const firstSectionData: FilterItemProps[] = mainItemsData.filter(
    (item) => item.mainItemAsset === 1,
  );
  const secondSectionData: FilterItemProps[] = mainItemsData.filter(
    (item) => item.mainItemAsset === 2,
  );
  const thirdSectionData: FilterItemProps[] = mainItemsData.filter(
    (item) => item.mainItemAsset === 3,
  );
  const fourthSectionData: FilterItemProps[] = mainItemsData.filter(
    (item) => item.mainItemAsset === 4,
  );

  return (
    <div>
      <Gnb DATA={GNB_CONTENTS} />
      <TitleHeader />
      <Category />
      <S.SectionWrapper>
        <S.NbWrapper>
          <Nb DATA={MAIN_BUTTON_DATA} isClicked={isClicked} setIsClicked={setIsClicked} />
        </S.NbWrapper>
        <FirstSection data={firstSectionData} />
        <SecondSection data={secondSectionData} />
        <ThirdSection data={thirdSectionData} />
        <FourthSection data={fourthSectionData} />
      </S.SectionWrapper>
      <MainFooter />
      <Footer data={footerData} />
    </div>
  );
};

export default MainPage;
