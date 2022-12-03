import React, { useState } from "react";
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
`;
const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const Header = () => {
  // 캘린더 상태값
  const [value, onChange] = useState(new Date());
  // 모달 노출 상태값
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalHandler = (e) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <HeaderContainer onClick={modalHandler}>
        <DayToYear>{moment(value).format("YYYY년 MM월 DD일")}</DayToYear>
        <DayOfWeek>{moment(value).format("dddd")}</DayOfWeek>
      </HeaderContainer>
      <ModalContainer>
        {isModalOpen && (
          <ModalBackdrop onClick={modalHandler}>
            <Calendar onChange={onChange} value={value} />
          </ModalBackdrop>
        )}
      </ModalContainer>
    </>
  );
};

export default Header;
