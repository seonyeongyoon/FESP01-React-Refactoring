# 멋쟁이 사자처럼 Front-End School Plus 1기: 미니 프로젝트(TODO App)

- GitHub URL: (https://github.com/uzoolove/FESP01-JS-Project)

## 1. 소개 👥

- 해야할 일을 등록하고 수정 및 삭제할 수 있는 서비스입니다.

## 2. 🙋‍♀️ 만든 사람들 🙋‍♂️

|              **FE 이호**              |               **FE 장현주**               |           **FE 장효윤**           |                **FE 전서희**                |
| :-----------------------------------: | :---------------------------------------: | :-------------------------------: | :-----------------------------------------: |
| [bomlang](https://github.com/bomlang) | [hyeonjuuu](https://github.com/hyeonjuuu) | [HYHYJ](https://github.com/HYHYJ) | [SeoHee3478](https://github.com/SeoHee3478) |

## 3. 개발 환경

**[개발 환경]**

- Front-End: JavaScript, CSS
- Back-End: 제공된 API 사용

## 4. 개발 일정 🗓

#### 기간 : 2023.10.29(일) ~ 10월 31(화), 2일

- 프로젝트 회의 : 10월 29일(일)
  - 기능 정의 및 디자인 시안 공유
  - 깃 컨벤션 및 깃 전략 공유
- 기능 구현 : 10월 30일(월) ~ 10월 31일(화)

## 5. 프로젝트 구조 🗂

```
📦todoapp
 ┣ 📂assets
 ┃ ┣ 📂css
 ┃ ┃ ┗ 📜index.css
 ┃ ┣ 📂img
 ┃ ┃ ┣ 📜checkboxOff.png
 ┃ ┃ ┣ 📜checkboxOn.png
 ┃ ┃ ┗ 📜favicon.ico
 ┃ ┗ 📂js
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┣ 📜Footer.js
 ┃ ┃ ┃ ┣ 📜Header.js
 ┃ ┃ ┃ ┗ 📜nav.js
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📂info
 ┃ ┃ ┃ ┃ ┗ 📜TodoInfo.js
 ┃ ┃ ┃ ┣ 📂list
 ┃ ┃ ┃ ┃ ┗ 📜TodoList.js
 ┃ ┃ ┃ ┣ 📂regist
 ┃ ┃ ┃ ┃ ┗ 📜TodoRegist.js
 ┃ ┃ ┃ ┗ 📂update
 ┃ ┃ ┃ ┃ ┗ 📜TodoUpdate.js
 ┃ ┃ ┣ 📜App.js
 ┃ ┃ ┗ 📜index.js
 ┗ 📜index.html
```

## 5. 역할 분담 👨‍👩‍👧‍👧

### [🧑🏻‍💻이호](https://github.com/bomlang)

- 할일 목록 조회 기능, list 페이지 레이아웃
- 체크박스기능 및 삭제기능 추가

### [👩🏻‍💻장현주](https://github.com/hyeonjuuu)

- 할일 상세 조회 기능, info 페이지 레이아웃
- 할일 등록
- 체크박스기능 및 삭제기능 추가

### [👩🏻‍💻장효윤](https://github.com/HYHYJ)

- 할일 목록 조회 기능, list 페이지 레이아웃
- 할일 수정 기능
- 할일 수정 및 삭제, update 페이지 레이아웃

### [👩🏻‍💻전서희](https://github.com/SeoHee3478)

- 할일 상세 조회 기능
- 할일 등록, regist 페이지 레이아웃
- 할일 수정 및 삭제, update 페이지 레이아웃
- 디자인 제작

## 6. 구현 기능 🛠

기본기능

- [x] 할일 목록 조회(List)
- [x] 할일 상세 조회(Info)
- [x] 할일 등록(Regist)
- [x] 할일 수정(Update)
- [x] 할일 삭제
- [x] 할일 완료/미완료 처리

추가기능: (추후 리팩토링 예정)

- [ ] 페이지네이션
- [ ] 정렬
- [ ] 라우터

### 구현 페이지

|                                               할일 목록 조회                                               |                                                  할일 등록                                                   |                                               할일 상세 조회                                               |                                                  할일 수정                                                   |
| :--------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: |
| ![List](https://github.com/bomlang/FESP01-JS-Project/assets/78894678/d2b684f8-c1e3-4cd5-951f-043610ed199c) | ![Regist](https://github.com/bomlang/FESP01-JS-Project/assets/78894678/915a44ad-8bf2-42c1-9664-f277e0905354) | ![Info](https://github.com/bomlang/FESP01-JS-Project/assets/78894678/bca3842f-576b-413c-89b9-981269af140a) | ![Update](https://github.com/bomlang/FESP01-JS-Project/assets/78894678/b9596915-bf36-45b4-a37a-2cb2b1c10427) |
|                                     할일 목록을<br>조회할 수 있습니다.                                     |                             할일에 제목, 내용을 작성하여<br> 등록할 수 있습니다.                             |                            할일을 클릭하여 상세내용을 <br> 확인 할 수 있습니다.                            |                              이미 작성한 할일 목록을 <br> 수정 할 수 있습니다.                               |

## 7. 서버 구동

- 프로젝트 루트에서 실행

```
cd 01.javascript/todoapp
npx serve .
```

- -s 옵션: 라우터를 추가할 경우 클라이언트가 요청한 모든 URL에 대해서 index.html을 응답하도록 설정

```
cd 01.javascript/todoapp-router
npx serve -s .
```

- http://localhost:3000 접속
  - 이미 3000 포트가 사용중일 경우 콘솔 안내 메세지에 따라서 접속
