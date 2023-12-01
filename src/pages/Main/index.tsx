import { useEffect, useState } from 'react';
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
import CommonFooter from '../../common/Footer/CommonFooter';

interface FilterItemProps {
  mainItemAsset: number;
  mainItemName: string;
  mainItemPrice: string;
  mainCategoryImg: string;
}

const MainPage = () => {
  const { res: mainItemsData } = useGetMain();
  const [isClicked, setIsClicked] = useState(10);
  const location = document.querySelector(`#section${isClicked + 1}`);
  const wrapperLocation = document.querySelector(`#header`);

  const goClickedSection = (location: Element) => {
    // Element 형식에는 offsetTop 속성을 활용할 수 없기 때문에 HTMLElement로 활용
    window.scrollTo({
      top: (location as HTMLElement).offsetTop - (wrapperLocation as HTMLElement).offsetHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (location) {
      goClickedSection(location);
    }
  }, [location]);

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
    <div className='gray'>
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
      <CommonFooter />
      <Footer data={footerData} />
    </div>
  );
};

export default MainPage;
