import * as S from '../Section.style';
import SectionHeader from '../SectionHeader';
import SecondSectionBtn from './SecondSectionBtn/index';

interface SecondSectionProps {
  data: Product[];
}

interface Product {
  mainItemAsset: number;
  mainItemName: string;
  mainItemPrice: string;
  mainCategoryImg: string;
}

const SecondSection = ({ data }: SecondSectionProps) => {
  return (
    <S.SectionWrapper id='section2'>
      <SectionHeader title='맞춤 각인.' subtitle='애틋함을 아로새기다.' />
      <S.ScrollWrapper>
        <S.ScrollContent>
          <SecondSectionBtn SecondSectionData={data} />
        </S.ScrollContent>
      </S.ScrollWrapper>
    </S.SectionWrapper>
  );
};

export default SecondSection;
