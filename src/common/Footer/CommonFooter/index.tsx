import useGetFooterContetnts from '../../../libs/hooks/useGetFooterContents';
import * as S from './CommonFooter.style';

const CommonFooter = () => {
  const { res } = useGetFooterContetnts();
  const topContents = res?.slice(0, 4);
  const middleContents = res?.slice(3, 7);
  const middle2Contents = res?.slice(7, 9);
  const bottomContents = res?.slice(9, res.length - 1);

  return (
    <S.CommonFooterContainer>
      {topContents?.map((data) => {
        return (
          <S.ContentsContainer key={data.id}>
            <S.Contents>{data.content}</S.Contents>
          </S.ContentsContainer>
        );
      })}

      <S.ContentsContainer>
        {middleContents?.map((data) => {
          return (
            <S.Contents key={data.id} $addMarginTop={data.id}>
              {data.content}
            </S.Contents>
          );
        })}
      </S.ContentsContainer>

      {middle2Contents?.map((data) => {
        return (
          <S.ContentsContainer key={data.id}>
            <S.Contents>{data.content}</S.Contents>
          </S.ContentsContainer>
        );
      })}

      <S.ContentsContainer>
        {bottomContents?.map((data) => {
          return (
            <S.Contents key={data.id} $addMarginTop={data.id}>
              {data.content}
            </S.Contents>
          );
        })}
      </S.ContentsContainer>
    </S.CommonFooterContainer>
  );
};

export default CommonFooter;
