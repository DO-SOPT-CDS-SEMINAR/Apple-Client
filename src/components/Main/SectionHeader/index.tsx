import * as S from './SectionHeader.style';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <S.HeaderContainer id='header'>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.HeaderContainer>
  );
};

export default SectionHeader;
