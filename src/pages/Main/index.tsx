import Gnb from '../../common/Gnb';
import { GNB_CONTENTS } from '../../constant/gnbContents';
import { MAIN_BUTTON_DATA } from '../../constant/mainButton';
import Nb from '../../common/Nb';
import Category from '../../components/Category';
import TitleHeader from '../../components/Main/TitleHeader';
import FirstSection from '../../components/Main/FirstSection';
import SecondSection from '../../components/Main/SecondSection';
import ThirdSection from '../../components/Main/ThirdSection';
import FourthSection from '../../components/Main/FourthSection';

const MainPage = () => {
  return (
    <div>
      <Gnb DATA={GNB_CONTENTS} />
      <TitleHeader />
      <Category />
      <Nb DATA={MAIN_BUTTON_DATA} />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
};

export default MainPage;
