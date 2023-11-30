import * as S from '../Section.style';
import SectionHeader from '../SectionHeader';
import FourthSectionBtn from './FourthSectionBtn/index';

const FourthSection = () => {
  return (
    <S.SectionWrapper>
      <SectionHeader title='특별 할인.' subtitle='비즈니스, 학교 등을 위한 혜택.' />
      <S.ScrollWrapper>
        <S.ScrollContent>
          <FourthSectionBtn />
        </S.ScrollContent>
      </S.ScrollWrapper>
    </S.SectionWrapper>
  );
};

export default FourthSection;
