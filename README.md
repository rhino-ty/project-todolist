![header](https://capsule-render.vercel.app/api?type=waving&height=200&color=1b262c)

# Todo Rhinost
Todo 관리를 위한 웹 애플리케이션입니다.

## 기능

- 편리한 UI로 Todo를 쉽게 CRUD 할 수 있습니다.
- Todo에 기한과 날짜를 고를 수 있습니다.

## Contributors

- FE: 윤태연()


## 컴포넌트 기획

1. 날짜가 있는 헤더: [React-calendar 라이브러리](https://github.com/wojtekmaj/react-calendar)를 사용<br />![](https://velog.velcdn.com/images/okko8522/post/0b8ebcca-a103-444d-9ece-19ad17e04cba/image.png)
2. 리스트로 펼쳐지는 본 섹션: 체크박스, 글자를 클릭하면 수정되게, 마우스가 올라가면 삭제 버튼 구현
3. 습관 / 생성버튼 / 일일 과제 페이지 3개로 나뉘어 펼침: 메인으로 습관이 나오도록 하고, 생성버튼은 가볍게 +로, 일일과제는 날짜가 지나면 그 전 거는 저장되고 초기화되게(날짜로 서버 데이터를 연동)

## 사용 라이브러리

달력 관련: react-calendar, moment <br />
CSS 툴: Styled-Components <br />
React: react-router-dom, CRA <br />
기타: Json-server, axios, uuid <br />

## 실행화면

https://user-images.githubusercontent.com/94962427/207256261-78b02e6a-8cee-4ac0-a93b-c89cf1d88d52.mov


## Project Wiki

정보, 기획, 아키텍쳐에 대한 자세한 안내입니다.

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=okko8522&color=dark&slug=Todo-리스트-만들기1-기본적인-구조-CRUD)](https://velog.io/@okko8522/Todo-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B01-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-%EA%B5%AC%EC%A1%B0-CRUD)


![Footer](https://capsule-render.vercel.app/api?type=waving&color=1b262c&height=200&section=footer)
