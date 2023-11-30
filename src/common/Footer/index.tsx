import * as S from './Footer.style';
import { FooterIcApple } from '../../assets/icon';
import { IpadproIcRightGray24 } from '../../assets/icon';

interface FooterItem {
  title: string;
  items: string[];
  title2: string;
  items2: string[];
}

interface FooterProps {
  data: FooterItem[];
}

const Footer = ({ data }: FooterProps) => {
  return (
    <S.FooterWrapper>
      <S.FooterRoute>
        <FooterIcApple />
        <IpadproIcRightGray24 />
        <p>Apple Store 온라인</p>
      </S.FooterRoute>
      <S.FooterList>
        {data.map((category) => (
          <div key={category.title}>
            <S.StyledP>{category.title}</S.StyledP>
            <S.StyledUl>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </S.StyledUl>
            <S.StyledP>{category.title2}</S.StyledP>
            <S.StyledUl>
              {category.items2.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </S.StyledUl>
          </div>
        ))}
      </S.FooterList>
      <S.Link>
        다양한 쇼핑 방법: <span>Apple Store를 방문</span>하거나, <span>리셀러</span>를 찾아보거나,
        080-330-8877번으로 전화하세요.
      </S.Link>
    </S.FooterWrapper>
  );
};

export default Footer;
