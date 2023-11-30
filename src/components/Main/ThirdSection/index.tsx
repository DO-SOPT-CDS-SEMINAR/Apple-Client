import * as S from '../Section.style';
import SectionHeader from '../SectionHeader';
import ThirdSectionBtn from './ThirdSectionBtn/index';

const ThirdSection = () => {
  return (
    <S.SectionWrapper>
      <SectionHeader title='Apple 독점 제공.' subtitle='연말연시 기분을 만끽하기에 딱인 곳.' />
      <S.ScrollWrapper>
        <S.ScrollContent>
          <ThirdSectionBtn />
        </S.ScrollContent>
      </S.ScrollWrapper>
    </S.SectionWrapper>
  );
};

export default ThirdSection;
