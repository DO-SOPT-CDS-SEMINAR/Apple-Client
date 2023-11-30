import {
  IconIpadproCtype,
  ImgIpadpro5g,
  ImgIpadproA14,
  ImgIpadproA15,
  ImgIpadproCameraUltrawide,
  ImgIpadproCameraWide,
  ImgIpadproCompareIpad,
  ImgIpadproCompareIpadair,
  ImgIpadproCompareIpadmini,
  ImgIpadproFront,
  ImgIpadproKeyboard1,
  ImgIpadproKeyboard2,
  ImgIpadproM1,
  ImgIpadproPencil1,
  ImgIpadproPencil2,
  ImgIpadproTouchid,
  ImgIpadproWide,
} from '../assets/icon';

export const IPAD_INFO = [
  {
    id: 1,
    ipadImg: <ImgIpadproCompareIpadair />,
    name: 'IPad Air',
    description: '얇고 가벼운 디자인. 결코 가볍지 않은 성능.',
    price: '₩929,000 부터',
    size: '27.5cm',
    sizeDesc: 'Liquid Retina 디스플레이²',
    option: ['-', '넓은 색영역(P3)', '반사 방지 코팅'],

    info: [
      { icon: <ImgIpadproM1 />, desc: ['M1칩'] },
      { icon: <ImgIpadproFront />, desc: ['12MP 울트라 와이드 전면 카메라', '-'] },
      { icon: <ImgIpadproCameraWide />, desc: ['12MP 와이드 전면 카메라', '-', '4K 동영상'] },
      { icon: <ImgIpadproTouchid />, desc: ['상단 버튼에 내장된 Touch ID'] },
      { icon: <IconIpadproCtype />, desc: ['USB-C 커넥터'] },
      { icon: <ImgIpadpro5g />, desc: ['5G 셀룰러'] },
      {
        icon: <ImgIpadproPencil2 />,
        desc: ['Apple Pencil(2세대) 지원', 'Apple Pencil(USB-C) 지원'],
      },
      { icon: <ImgIpadproKeyboard2 />, desc: ['Magic Keyboard 지원', 'Smart Keyboard Folio 지원'] },
    ],
  },

  {
    id: 2,
    ipadImg: <ImgIpadproCompareIpad />,
    name: 'IPad 5세대',
    description: '매일매일 여러 일을 척척. 널찍한 화면. 화사한 색상.',
    price: '₩679,000 부터',
    size: '27.5cm',
    sizeDesc: 'Liquid Retina 디스플레이²',
    option: ['-', 'sRGB 색영역', '-'],

    info: [
      { icon: <ImgIpadproA14 />, desc: ['M1칩'] },
      { icon: <ImgIpadproWide />, desc: ['12MP 울트라 와이드 전면 카메라', '-'] },
      { icon: <ImgIpadproCameraWide />, desc: ['12MP 와이드 전면 카메라', '-', '4K 동영상'] },
      { icon: <ImgIpadproTouchid />, desc: ['상단 버튼에 내장된 Touch ID'] },
      { icon: <IconIpadproCtype />, desc: ['USB-C 커넥터'] },
      { icon: <ImgIpadpro5g />, desc: ['5G 셀룰러3'] },
      {
        icon: <ImgIpadproPencil1 />,
        desc: ['Apple Pencil(USB-C) 지원', 'Apple Pencil 1세대 지원4'],
      },
      { icon: <ImgIpadproKeyboard2 />, desc: ['Magic Keyboard Folio지원', '-'] },
    ],
  },

  {
    id: 3,
    ipadImg: <ImgIpadproCompareIpadmini />,
    name: 'IPad Air',
    description: '한 손에 쏙 들어오는 손색없는 iPad 경험.',
    price: '₩769,000 부터',
    size: '21.0cm',
    sizeDesc: 'Liquid Retina 디스플레이²',
    option: ['-', '넓은 색영역(P3)', '반사 방지 코팅'],

    info: [
      { icon: <ImgIpadproA15 />, desc: ['A15 Bionic 칩'] },
      { icon: <ImgIpadproFront />, desc: ['12MP 울트라 와이드 전면 카메라', '-'] },
      {
        icon: <ImgIpadproCameraUltrawide />,
        desc: ['12MP 가로형 울트라 와이드 전면 카메라', '-', '4K 동영상'],
      },
      { icon: <ImgIpadproTouchid />, desc: ['상단 버튼에 내장된 Touch ID'] },
      { icon: <IconIpadproCtype />, desc: ['USB-C 커넥터'] },
      { icon: <ImgIpadpro5g />, desc: ['5G 셀룰러3'] },
      {
        icon: <ImgIpadproPencil2 />,
        desc: ['Apple Pencil(2세대) 지원', 'Apple Pencil(USB-C) 지원'],
      },
      { icon: <ImgIpadproKeyboard1 />, desc: ['Blutooth 키보드 지원', '-'] },
    ],
  },
];
