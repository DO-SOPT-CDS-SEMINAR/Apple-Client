import * as S from '../Section.style';
import SectionHeader from '../SectionHeader';
import FirstSectionBtn from './FirstSectionBtn';

interface FirstSectionProps {
  data: Product[];
}

interface Product {
  mainItemAsset: number;
  mainItemName: string;
  mainItemPrice: string;
  mainCategoryImg: string;
}

const FirstSection = ({ data }: FirstSectionProps) => {
  return (
    <S.SectionWrapper>
      <SectionHeader title='최신 제품.' subtitle='주고싶은 특별한 누군가를 위한 선물.' />
      <S.ScrollWrapper>
        <S.ScrollContent>
          <FirstSectionBtn firstSectionData={data} />
        </S.ScrollContent>
      </S.ScrollWrapper>
    </S.SectionWrapper>
  );
};

export default FirstSection;
