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
              <S.ImgContainer>{ipad.ipadImg}</S.ImgContainer>

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
                    <S.Container key={idx} $height={17.2}>
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
      </S.ContentsContainer>
    </S.ThirdSectionContainer>
  );
};

export default ThirdSection;
