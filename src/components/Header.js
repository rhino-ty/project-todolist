import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "./Calendar.css"; // css import
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid #0f4c75;
  height: 96px;
`;
const DayToYear = styled.div`
  font-size: 30px;
  margin: auto;
`;
const DayOfWeek = styled.div`
  font-size: 25px;
  margin: auto auto 13px;
  color: #bbe1fa;
`;
const ModalContainer = styled.div`
  margin: auto;
  position: relative;
  z-index: 2;
`;
const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

// TODO: useEffect를 활용해 모달이벤트와 달력 데이터를 바뀌게 해보기

const Header = () => {
  // 캘린더 상태값
  const [value, onChange] = useState(new Date());
  // 모달 노출 상태값
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalHandler = (e) => {
    setIsModalOpen(true);
  };
  // useEffect에 달력 값이 변하면 setIsModalOpen가 false가 되고 달력 값을 그대로 전달하게
  useEffect(() => {
    setIsModalOpen(false);
  }, [value]);
  // TODO: 날짜 데이터를 이런 형식으로 넘기기 moment().format("YYYY/MM/DD");

  return (
    <>
      <HeaderContainer onClick={modalHandler}>
        <DayToYear>{moment(value).format("YYYY년 MM월 DD일")}</DayToYear>
        <DayOfWeek>{moment(value).format("dddd")}</DayOfWeek>
      </HeaderContainer>
      <ModalContainer>
        {isModalOpen && (
          <ModalBackdrop>
            <Calendar onChange={onChange} value={value} />
          </ModalBackdrop>
        )}
      </ModalContainer>
    </>
  );
};

export default Header;
