<div align="center">

<h2> Apple </h2>

<img width="597" alt="Apple logo" src="https://www.actualidadiphone.com/wp-content/uploads/2023/03/Apple-logo.jpg">


<br/>


</div>

<br/>

<h2> ✨ RE-BRANDING </h2>

<h3> 1️⃣ Main & iPad </h3>

- 호버 인터렉션 강조하여 선택항목에 대한 인지도 상승 
- 이미지 불필요한 카드 축소하여 한 화면에 더 많은 카드 배치, 빠르게 정보 확인할 수 있게 개선 
- 상단 탭 바 추가적으로 구성하여 빠르게 필요한 항목 탐색 가능

<h3> 2️⃣ IPad Pro </h3>

- 제품 상세화면 탭바 구성하여 목차 한눈에 들어오게 정리
- 아이패드 비교란에 원하는 정보만 선택할 수 있게 드롭다운 버튼 추가 및 항목 축소


<h3> 3️⃣ Add </h3>

- 추가 구매 페이지 팝업 화면으로 변경하여 간단하게 확인 가능하게 개선
- 토글 메뉴로 상품 품목 정리하여 필요한 것만 볼 수 있게 구성

<br/>
<br/>

<h2> 👥 Team </h2>

### 👨‍💻 팀원 정보

<table align="center">
    <tr align="center">
        <td style="min-width: 300px;">
            <a href="https://github.com/Arooming">
              <img src="https://avatars.githubusercontent.com/u/80264647?v=4" width="300" height="250">
              <br />
              <b>서아름</b>
            </a> 
        </td>
        <td style="min-width: 300px;">
            <a href="https://github.com/rachel5640">
              <img src="https://velog.velcdn.com/images/aroo_ming/post/7146f595-b6a1-4889-a962-c158c4bfdf2a/image.jpeg" width="300" height="250">
              <br />
              <b>강민서</b>
            </a>
        </td>
        <td style="min-width: 300px;">
            <a href="https://github.com/hoeun0723">
              <img src="https://avatars.githubusercontent.com/u/38005874?v=4" width="300" height="250">
              <br />
              <b>왕호은</b>
            </a> 
        </td>
    </tr>
    <tr align="center">
        <td>
            Web FE
        </td>
        <td>
            Web FE
        </td>
        <td>
            Web FE
        </td>
    </tr>
</table>

<br/>
<br/>

### 🍯 팀원 역할 분담

<table>
    <tr align="center">
        <td>
            🐰 서아름
        </td>
        <td>
        초기세팅(폴더 구조, svgr 세팅) / 아이패드의 종류 보여주는 뷰 / 아이패드 구매하기 뷰 하단 컴포넌트 / 푸터 1
        </td>
    </tr>
    <tr align="center">
        <td>
            🐹 강민서
        </td>
        <td>
        초기세팅(husky) / 메인(홈) 뷰 / 아이패드 악세서리 추천 모달 / 푸터 2
        </td>
    </tr>
    <tr align="center">
        <td>
            🐶 왕호은
        </td>
        <td>
          초기세팅(eslint + prettier) / 아이패드 구매하기 뷰
        </td>
    </tr>
</table>

<br/>
<br/>

<h2>  📄 컨벤션 및 브랜치 전략 </h2>

[🍎 웹 8조 컨벤션](https://sudsy-hemisphere-280.notion.site/3e819e4082ec426bbce7c6c0720d5481?pvs=4)

<br/>
<br/>

## 🎋 브랜치 전략

- 브랜치 전략
  - `feature/담당 뷰 이름`
    - feature/ (파스칼)
  - `담당 페이지명/#이슈번호-기능설명`
    - ShowIpad/#3-ui-publishing (-로 연결)
  ```js
  develop
  ㄴ feature/ShowIpad
  	ㄴ ShowIpad/#3-ui-publishing
  ```
- 🚨 반드시 **issue 단위**로 브랜치 파기
- ⭐️ issue는 최대한 작은 단위로, 상세하게 팝니다. 
- ↩️ PR은 1명 이상이 확인하면 merge (리뷰는 48시간 내에)

<br/>
<br/>

### ✅ 커밋 컨밴션

- 커밋 단위는 반드시 최소한의 작업 단위로 쪼개서, 커밋 메시지는 핵심 내용 위주로 적어줍니다.

| 커밋     | 역할                                                                  |
| -------- | --------------------------------------------------------------------- |
| feat     | 기능 구현과 관련된 커밋                                               |
| style    | 코드 순서, css등의 포맷에 관한 커밋 (기능에 변화X)                    |
| design   | UI 구현 (css 구체화) 커밋                                             |
| fix      | 버그를 고친 경우                                                      |
| refactor | 더 좋은 코드로 개선한 경우 (기능에 변화가 없는 경우) ex-코드리뷰 반영 |
| docs     | README.md 등 문서를 작성한 경우                                       |
| chore    | 주석 추가, 자잘한 문서 수정                                           |

<br/>
<br/>

## 📁 폴더 구조

```
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
  |-- 📁 components
	|-- 📁 pages
	|-- 📁 libs
    |-- 📁 hooks
    |-- 📁 api
  |-- 📁 constants
	|-- 📁 assets
		|-- 📁 icon
	|-- 📁 style
		|-- GlobalStyle.ts
		|-- theme.ts
    |-- style.d.ts
	|-- App.jsx
	|-- main.jsx
	|-- Router.jsx
|-- .eslintrc.cjs
|-- .gitignore
|-- index.html
|-- package.json
|-- README.md
|-- vite.config.js
|-- yarn.lock
```

<br/>
<br/>

## 🛠 기술 스택

| 역할                 | 종류                                                                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                |
| Programming Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=black)                                                                                             |
| Styling              | ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                                                           |
| Data Fetching        | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)                                                                                                                |
| Formatting           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) |
| Package Manager      | ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)                                                                                                                   |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  |

<br />
<br/>

## 🐝 우리만의 규칙

- 합동 세미나 관련 매일 작업한 내용을 `todo`에 기록해요 !
  - not started/ progress/ done으로 상태 표시
- 트러블 슈팅은 그때 그때, 최대한 자세히 기록해요 !
- 타파트/자신파트의 결정사항에 있어서 조금이라도 불확실한 부분은 **반드시!! 확실하게 짚고 넘어가요** 🚨

