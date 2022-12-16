![header](https://capsule-render.vercel.app/api?type=waving&height=200&color=1b262c)

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=okko8522&color=dark&slug=Todo-리스트-만들기1-기본적인-구조-CRUD)](https://velog.io/@okko8522/Todo-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B01-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-%EA%B5%AC%EC%A1%B0-CRUD)

# 컴포넌트 기획

1. 날짜가 있는 헤더: [React-calendar 라이브러리](https://github.com/wojtekmaj/react-calendar)를 사용![](https://velog.velcdn.com/images/okko8522/post/0b8ebcca-a103-444d-9ece-19ad17e04cba/image.png)
2. 리스트로 펼쳐지는 본 섹션: 체크박스, 글자를 클릭하면 수정되게, 마우스가 올라가면 삭제 버튼 구현
3. 습관 / 생성버튼 / 일일 과제 페이지 3개로 나뉘어 펼침: 메인으로 습관이 나오도록 하고, 생성버튼은 가볍게 +로, 일일과제는 날짜가 지나면 그 전 거는 저장되고 초기화되게(날짜로 서버 데이터를 연동)

## 사용 라이브러리

달력 관련: react-calendar, moment <br />
CSS 툴: Styled-Components <br />
React: react-router-dom, CRA <br />
기타: Json-server, axios, uuid <br />

# 실행화면

https://user-images.githubusercontent.com/94962427/207256261-78b02e6a-8cee-4ac0-a93b-c89cf1d88d52.mov

# 아쉬운 점 / 더 할 점

- [ ] 1. 서버를 나중에 만들어서 해보고 싶다. json-server로 만드니 반쪽짜리 프로젝트같은 생각이 든다. 또 핫로딩을 위해서 reload 기능을 서버 api에 넣었는데 이건 SPA 장점을 무시하는 거라 express같은 걸로 서버를 만들어서 제대로된 spa를 구동하고 싶다.
- [ ] 2. 캘린더와 날짜 데이터를 연동하여서 매일 일일 과제는 초기화되고, 습관은 "done" 속성이 false가 되는 기능도 구현해보고 싶다.
- [ ] 3. 지금은 모바일 환경으로 만들었는데 pc 환경으로 맞춘 다음 달력이 계속 나오게 하고, 반응형으로 좁아지면 지금 화면과 같이 구현해보고 싶다.
- [ ] 4. 습관 / 일일 과제 페이지에서 교대할 때 그 페이지에 해당되는 주소면 탭 메뉴 글자가 파란색이든 하이라이트를 주고싶다.
- [ ] 5. 추가 버튼을 정마름모로 이쁘게 해보고싶은데 잘 안된다.. 고민해봐야겠다.

![Footer](https://capsule-render.vercel.app/api?type=waving&color=1b262c&height=200&section=footer)
