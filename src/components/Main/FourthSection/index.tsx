import * as S from '../Section.style';
import SectionHeader from '../SectionHeader';
import FourthSectionBtn from './FourthSectionBtn/index';

interface FourthSectionProps {
  data: Product[];
}

interface Product {
  mainItemAsset: number;
  mainItemName: string;
  mainItemPrice: string;
  mainCategoryImg: string;
}

const FourthSection = ({ data }: FourthSectionProps) => {
  return (
    <S.SectionWrapper id='section4'>
      <SectionHeader title='특별 할인.' subtitle='비즈니스, 학교 등을 위한 혜택.' />
      <S.ScrollWrapper>
        <S.ScrollContent>
          <FourthSectionBtn FourthSectionData={data} />
        </S.ScrollContent>
      </S.ScrollWrapper>
    </S.SectionWrapper>
  );
};

export default FourthSection;
