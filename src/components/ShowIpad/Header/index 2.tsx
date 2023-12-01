import * as S from './ShowIpadHeader.style';

interface ShowIpadHeaderProps {
  title: string;
  subTitle: string;
}

const ShowIpadHeader = ({ title, subTitle }: ShowIpadHeaderProps) => {
  return (
    <S.HeaderContainer>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.HeaderContainer>
  );
};

export default ShowIpadHeader;
