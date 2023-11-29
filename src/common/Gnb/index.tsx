import * as S from './Gnb.style';

import { GnbIcApple } from '../../assets/icon';
import { GnbIcSearch } from '../../assets/icon';
import { GnbIcShop } from '../../assets/icon';

export interface GnbProps {
  DATA: Array<string>;
}

const Gnb = ({ DATA }: GnbProps) => {
  return (
    <S.GnbWrapper>
      <GnbIcApple />
      {DATA.map((contents, idx) => {
        return <S.GnbBtn key={idx}> {contents}</S.GnbBtn>;
      })}
      <GnbIcSearch />
      <GnbIcShop />
    </S.GnbWrapper>
  );
};

export default Gnb;
