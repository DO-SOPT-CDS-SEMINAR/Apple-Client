import useGetFooterContetnts from '../../../libs/hooks/useGetFooterContents';
import * as S from './CommonFooter.style';

const CommonFooter = () => {
  const { res } = useGetFooterContetnts();
  const topContents = res?.slice(0, 4);
  const bottomContents = res?.slice(4, res.length);

  return (
    <S.CommonFooterContainer>
      <S.ContentsContainer>
        {topContents?.map((data) => {
          return <S.Contents key={data.id}>{data.content}</S.Contents>;
        })}
      </S.ContentsContainer>

      {bottomContents?.map((data) => {
        return (
          <S.ContentsContainer key={data.id}>
            <S.Contents>{data.content}</S.Contents>
          </S.ContentsContainer>
        );
      })}
    </S.CommonFooterContainer>
  );
};

export default CommonFooter;
