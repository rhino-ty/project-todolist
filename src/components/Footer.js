import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  display: flex;
  height: 96px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const HabitButton = styled.div`
  cursor: pointer;
  font-size: 25px;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 20px;
`;
const CreateButtonContainer = styled.div`
  cursor: pointer;
  background-color: #3282b8;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 89px;
  height: 89px;

  &:hover {
    box-shadow: 10px 14px 28px rgba(0, 0, 0, 0.25), 10px 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const CreateButton = styled.div`
  font-size: 50px;
  width: 100%;
  height: 100%;
  color: #bbe1fa;
  text-align: center;
`;
const DailyButton = styled.div`
  cursor: pointer;
  font-size: 25px;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <HabitButton>
        <Link to={`/`}>습관</Link>
      </HabitButton>
      <CreateButtonContainer>
        <CreateButton>+</CreateButton>
      </CreateButtonContainer>
      <DailyButton>
        <Link to={`/daily`}>일일 과제</Link>
      </DailyButton>
    </FooterContainer>
  );
};

export default Footer;
