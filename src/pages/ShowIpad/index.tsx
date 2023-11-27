import * as S from './ShowIpad.style';
import ShowCommonSection from '../../components/ShowIpad/CommonSection/ShowCommonSection';
import ShowFirstSection from '../../components/ShowIpad/FirstSection/ShowFirstSection';

const ShowIpadPage = () => {
  return (
    <S.ShowIpadPageContainer>
      <ShowFirstSection />
      <ShowCommonSection section={2} />
      <ShowCommonSection section={3} />
      <ShowCommonSection section={4} />
      <ShowCommonSection section={7} />
    </S.ShowIpadPageContainer>
  );
};

export default ShowIpadPage;
