# 컴포넌트 기획

1. 날짜가 있는 헤더: [React-calendar 라이브러리](https://github.com/wojtekmaj/react-calendar)를 사용![](https://velog.velcdn.com/images/okko8522/post/0b8ebcca-a103-444d-9ece-19ad17e04cba/image.png)
2. 리스트로 펼쳐지는 본 섹션: 체크박스, 글자를 클릭하면 수정되게, 마우스가 올라가면 삭제 버튼 구현
3. 습관 / 생성버튼 / 일일 과제 페이지 3개로 나뉘어 펼침: 메인으로 습관이 나오도록 하고, 생성버튼은 가볍게 +로, 일일과제는 날짜가 지나면 그 전 거는 저장되고 초기화되게(이거 어려울 것 같음..)

# 사용 라이브러리

달력 관련: react-calendar, moment
CSS 툴: Styled-Components
상태관리: Redux(아니면 recoil? 근데 작은 규모라면 안써도 뭐)
기타: StoryBook?
