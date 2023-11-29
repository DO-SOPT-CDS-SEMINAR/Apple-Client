import * as S from './ShowIpad.style';
import ShowCommonSection from '../../components/ShowIpad/CommonSection/ShowCommonSection';
import ShowFirstSection from '../../components/ShowIpad/FirstSection/ShowFirstSection';
import ShowFifthSection from '../../components/ShowIpad/FifthSection/ShowFifthSection';
import ShowSixthSection from '../../components/ShowIpad/SixthSection/ShowSixthSection';

const ShowIpadPage = () => {
  return (
    <S.ShowIpadPageContainer>
      <ShowFirstSection />
      <ShowCommonSection section={2} />
      <ShowCommonSection section={3} />
      <ShowCommonSection section={4} />
      <ShowFifthSection />
      <ShowSixthSection />
      <ShowCommonSection section={7} />
      <ShowCommonSection section={8} />
    </S.ShowIpadPageContainer>
  );
};

export default ShowIpadPage;
