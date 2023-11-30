import { useState } from 'react';
import { IPAD_INFO } from '../../../constant/ipadInfo';
import { Dropdown } from '../../Dropdown';
import * as S from './ThirdSection.style';

const ThirdSection = () => {
  const [value, setValue] = useState('');

  const handleSelectChange = (selectedValue: string) => {
    setValue(selectedValue);
  };
  return (
    <S.ThirdSectionContainer>
      <S.ThirdSectionHeader>iPad 비교하기</S.ThirdSectionHeader>

      <S.ContentsContainer>
        {IPAD_INFO.map((ipad, idx) => {
          return (
            <S.Contents key={idx}>
              <Dropdown onSelection={() => handleSelectChange(value)} />
              {ipad.ipadImg}
              <S.IpadContainer key={idx}>
                <S.NameContainer>
                  <S.Name>{ipad.name}</S.Name>
                  <S.Description>{ipad.description}</S.Description>
                  <S.Description $isPrice={true}>{ipad.price}</S.Description>
                </S.NameContainer>

                <S.Container>
                  <S.SizeContainer>
                    <S.Size>{ipad.size}</S.Size>
                    <S.Text>{ipad.sizeDesc}</S.Text>
                  </S.SizeContainer>

                  {ipad.option.map((v, idx) => {
                    return <S.Text key={idx}>{v}</S.Text>;
                  })}
                </S.Container>

                {ipad.info.map((info, idx) => {
                  return (
                    <S.Container key={idx}>
                      {info.icon}
                      {info.desc.map((desc, idx) => {
                        return <S.Text key={idx}>{desc}</S.Text>;
                      })}
                    </S.Container>
                  );
                })}
              </S.IpadContainer>
            </S.Contents>
          );
        })}

        {/* <S.IpadContainer>
          <S.NameContainer>
            <S.Name>IPad Air</S.Name>
            <S.Description>얇고 가벼운 디자인. 결코 가볍지 않은 성능.</S.Description>
          </S.NameContainer>

          <S.Container>
            <S.SizeContainer>
              <S.Size>27.5cm</S.Size>
              <S.Text>Liquid Retina 디스플레이²</S.Text>
            </S.SizeContainer>

            <S.Text>-</S.Text>
            <S.Text>넓은 색영역(P3)</S.Text>
            <S.Text>반사 방지 코팅</S.Text>
          </S.Container>

          <S.Container>
            <ImgIpadproM1 />
            <S.Text>M1칩</S.Text>
          </S.Container>

          <S.Container>
            <ImgIpadproFront />
            <S.Text>12MP 울트라 와이드 전면 카메라</S.Text>
            <S.Text>-</S.Text>
            <S.Text>4K 동영상</S.Text>
          </S.Container>
        </S.IpadContainer> */}
      </S.ContentsContainer>
    </S.ThirdSectionContainer>
  );
};

export default ThirdSection;
