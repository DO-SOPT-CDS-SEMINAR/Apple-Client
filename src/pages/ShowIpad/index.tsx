import * as S from './ShowIpad.style';
import ShowCommonSection from '../../components/ShowIpad/CommonSection/ShowCommonSection';
import ShowFirstSection from '../../components/ShowIpad/FirstSection/ShowFirstSection';
import ShowFifthSection from '../../components/ShowIpad/FifthSection/ShowFifthSection';
import ShowSixthSection from '../../components/ShowIpad/SixthSection/ShowSixthSection';
import PageHeader from '../../components/ShowIpad/PageHeader';
import { IPAD_COMMON_SUB_TITLE } from '../../constant/ipadSubtitle';
import { IPAD_COMMON_HEADER_TITLE } from '../../constant/ipadHeaderTitle';
import useGetIpadItems from '../../libs/hooks/useGetIpadItems';

interface RenderedCommonSectionProps {
  section: number;
  productAsset: number;
  subtitleIdx: number;
}

const ShowIpadPage = () => {
  const { res } = useGetIpadItems();

  const renderCommonSection = ({
    section,
    productAsset,
    subtitleIdx,
  }: RenderedCommonSectionProps) => (
    <ShowCommonSection
      section={section}
      data={res?.filter((it) => it.productAsset === productAsset)}
      subName={IPAD_COMMON_SUB_TITLE[subtitleIdx].subtitle}
      headerInfo={IPAD_COMMON_HEADER_TITLE.filter((it) => it.section === productAsset + 1)}
    />
  );

  return (
    <S.ShowIpadPageContainer className='gray'>
      <PageHeader />
      <ShowFirstSection headerInfo={IPAD_COMMON_HEADER_TITLE.filter((it) => it.section === 1)} />

      {renderCommonSection({ section: 2, productAsset: 1, subtitleIdx: 0 })}
      {renderCommonSection({ section: 3, productAsset: 2, subtitleIdx: 1 })}
      {renderCommonSection({ section: 4, productAsset: 3, subtitleIdx: 2 })}

      <ShowFifthSection
        data={res?.filter((it) => it.productAsset === 4)}
        headerInfo={IPAD_COMMON_HEADER_TITLE.filter((it) => it.section === 5)}
      />

      <ShowSixthSection
        data={res?.filter((it) => it.productAsset === 5)}
        headerInfo={IPAD_COMMON_HEADER_TITLE.filter((it) => it.section === 6)}
      />

      {renderCommonSection({ section: 7, productAsset: 6, subtitleIdx: 3 })}
      {renderCommonSection({ section: 8, productAsset: 7, subtitleIdx: 4 })}
    </S.ShowIpadPageContainer>
  );
};

export default ShowIpadPage;
