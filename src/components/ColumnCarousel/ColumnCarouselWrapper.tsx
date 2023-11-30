import { useRef, useState } from 'react';
import { AddToCartButton } from '../../common/Button/AddToCartButton';
import { ColorCarouselComponent } from './ColorCarouselComponent';
import * as S from './ColumnCarousel.style';
import { ConnectCarouselComponent } from './ConnectCarouselComponent';
import { GigaCarouselComponent } from './GigaCarouselComponent';
import { ModelCarouselComponent } from './ModelCarouselComponent';

export const ColumnCarouselWrapper = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (wrapperRef.current) {
      setIsDragging(true);
      setStartY(event.clientY - wrapperRef.current.offsetTop);
      setScrollTop(wrapperRef.current.scrollTop);
      wrapperRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    wrapperRef.current?.style.removeProperty('cursor');
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    if (wrapperRef.current) {
      const y = event.clientY - wrapperRef.current.offsetTop;
      const distance = y - startY;
      wrapperRef.current.scrollTop = scrollTop - distance;
    }
  };
  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    // 마우스 휠 이벤트 핸들러
    if (wrapperRef.current) {
      const delta = event.deltaY; // deltaY 값은 휠의 이동 방향과 속도를 나타냄
      wrapperRef.current.scrollBy({ top: delta, behavior: 'smooth' }); // 스크롤 이동
    }
  };
  return (
    <S.Wrapper
      ref={wrapperRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onWheel={handleScroll}
    >
      <ModelCarouselComponent />
      <ColorCarouselComponent />
      <GigaCarouselComponent />
      <ConnectCarouselComponent />
      <S.PriceWrapper>
        <S.FinalPrice>₩1,249,000</S.FinalPrice>
        <S.VATText>약 ₩285,364의 VAT 포함</S.VATText>
        <S.CardText>최대 12개월 신용 카드 할부</S.CardText>
      </S.PriceWrapper>
      <S.ItemWrapper>
        <S.ItemBox>픽업 : 재고확인</S.ItemBox>
        <S.ItemBox>도착 : 수 2023/11/15 - 무료 배송 추가 배송 옵션 확인</S.ItemBox>
      </S.ItemWrapper>
      <AddToCartButton>장바구니에 담기</AddToCartButton>
    </S.Wrapper>
  );
};
