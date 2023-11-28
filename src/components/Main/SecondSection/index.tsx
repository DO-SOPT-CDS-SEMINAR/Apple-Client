import * as S from './SecondSection.style';
import SectionHeader from '../SectionHeader';
import SecondSectionBtn from './SecondSectionBtn/index';

const SecondSection = () => {
  return (
    <S.SectionWrapper>
      <SectionHeader title='맞춤 각인.' subtitle='애틋함을 아로새기다.' />
      <S.ScrollWrapper>
        <S.ScrollContent>
          <SecondSectionBtn />
        </S.ScrollContent>
      </S.ScrollWrapper>
    </S.SectionWrapper>
  );
};

export default SecondSection;
