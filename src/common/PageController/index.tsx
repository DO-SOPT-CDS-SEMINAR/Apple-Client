import { EllipseDark, EllipseLight } from '../../assets/icon';
import * as S from './PageController.style';

interface PageControllerProps {
  pages: number;
  nowPage: number;
}

export const PageController = ({ pages, nowPage }: PageControllerProps) => {
  const renderEllipses = () => {
    return Array.from({ length: pages }, (_, index) =>
      index === nowPage ? <EllipseDark key={index} /> : <EllipseLight key={index} />,
    );
  };
  return <S.Wrapper>{renderEllipses()}</S.Wrapper>;
};
