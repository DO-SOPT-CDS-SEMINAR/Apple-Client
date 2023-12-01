import * as S from './ShowIpad.style';
import ShowCommonSection from '../../components/ShowIpad/CommonSection/ShowCommonSection';
import ShowFirstSection from '../../components/ShowIpad/FirstSection/ShowFirstSection';
import ShowFifthSection from '../../components/ShowIpad/FifthSection/ShowFifthSection';
import ShowSixthSection from '../../components/ShowIpad/SixthSection/ShowSixthSection';
import PageHeader from '../../components/ShowIpad/PageHeader';
import { IPAD_COMMON_SUB_TITLE } from '../../constant/ipadSubtitle';
import { IPAD_COMMON_HEADER_TITLE } from '../../constant/ipadHeaderTitle';
import useGetIpadItems from '../../libs/hooks/useGetIpadItems';
import Gnb from '../../common/Gnb';
import { GNB_CONTENTS } from '../../constant/gnbContents';
import Banner from '../../common/Banner';
import Nb from '../../common/Nb';
import { useEffect, useState } from 'react';
import Footer from '../../common/Footer';
import { footerData } from '../../constant/footerData';
import CommonFooter from '../../common/Footer/CommonFooter';

interface RenderedCommonSectionProps {
  section: number;
  productAsset: number;
  subtitleIdx: number;
}

const ShowIpadPage = () => {
  const { res } = useGetIpadItems();

  const [isClicked, setIsClicked] = useState(10);
  const location = document.querySelector(`#section${isClicked + 1}`);

  const goClickedSection = (location: Element) => {
    // Element 형식에는 offsetTop 속성을 활용할 수 없기 때문에 HTMLElement로 활용
    window.scrollTo({ top: (location as HTMLElement).offsetTop, behavior: 'smooth' });
  };

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

  useEffect(() => {
    if (location) {
      goClickedSection(location);
    }
  }, [location]);

  return (
    <S.ShowIpadPageContainer>
      <Gnb DATA={GNB_CONTENTS} />
      <Banner />
      <div className='gray'>
        <PageHeader />
        <S.NbContainer>
          <Nb
            DATA={[
              '모든 모델',
              '쇼핑안내',
              '각종 할인 방법',
              '남다른 Apple Store',
              '액세서리',
              '설정 및 지원',
              'iPad 경험',
              '특별 할인',
            ]}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        </S.NbContainer>

        <S.ContentsContainer>
          <ShowFirstSection
            headerInfo={IPAD_COMMON_HEADER_TITLE.filter((it) => it.section === 1)}
          />

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
        </S.ContentsContainer>
      </div>

      <S.FooterContainer>
        <CommonFooter />
        <Footer data={footerData} />
      </S.FooterContainer>
    </S.ShowIpadPageContainer>
  );
};

export default ShowIpadPage;
