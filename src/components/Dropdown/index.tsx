import { DropDownMore, DropDownNow } from '../../constants/dropdown.constant.js';
import * as S from './Dropdown.style.js';
import { useState, useEffect, useRef } from 'react';

interface DropdownProps {
  onSelection: (selectedValue: string) => void;
}

export const Dropdown = ({ onSelection }: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelection = (value: string) => {
    setSelectedValue(value);
    setIsDropDown(false);
    onSelection(value);
  };

  const toggleDropdown = () => {
    setIsDropDown((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <S.Wrapper ref={selectRef}>
      <S.SelectButton type='button' onClick={toggleDropdown}>
        <S.Select>{selectedValue}</S.Select>
        ...
      </S.SelectButton>
      {isDropDown && (
        <S.DropDown>
          <S.DropDownTitle>현재 iPad 모델</S.DropDownTitle>
          {DropDownNow.map((option) => (
            <S.Option key={option.key} onClick={() => handleSelection(option.value)}>
              {option.value}
            </S.Option>
          ))}
          <S.DropDownTitle>더 많은 iPad 모델</S.DropDownTitle>
          {DropDownMore.map((option) => (
            <S.Option key={option.key} onClick={() => handleSelection(option.value)}>
              {option.value}
            </S.Option>
          ))}
        </S.DropDown>
      )}
    </S.Wrapper>
  );
};
