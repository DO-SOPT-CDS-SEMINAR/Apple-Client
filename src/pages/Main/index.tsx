import Gnb from '../../common/Gnb';
import { GNB_CONTENTS } from '../../constant/gnbContents';
import { MAIN_BUTTON_DATA } from '../../constant/mainButton';
import Nb from '../../common/Nb';
import Category from '../../components/Category';
import TitleHeader from '../../components/Main/TitleHeader';

const MainPage = () => {
  return (
    <div>
      <Gnb DATA={GNB_CONTENTS} />
      <TitleHeader />
      <Category />
      <Nb DATA={MAIN_BUTTON_DATA} />
    </div>
  );
};

export default MainPage;
