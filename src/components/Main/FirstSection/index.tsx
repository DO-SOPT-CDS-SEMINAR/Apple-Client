import * as S from '../Section.style';
import SectionHeader from '../SectionHeader';
import FirstSectionBtn from './FirstSectionBtn';

const FirstSection = () => {
  return (
    <S.SectionWrapper>
      <SectionHeader title='최신 제품.' subtitle='주고싶은 특별한 누군가를 위한 선물.' />
      <S.ScrollWrapper>
        <S.ScrollContent>
          <FirstSectionBtn />
        </S.ScrollContent>
      </S.ScrollWrapper>
    </S.SectionWrapper>
  );
};

export default FirstSection;
