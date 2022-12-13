import React, { useState } from "react";
import styled, { css } from "styled-components";
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

  ${(props) =>
    props.curruntPage &&
    css`
      color: #bbe1fa;
    `}
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

  ${(props) =>
    props.curruntPage &&
    css`
      color: #bbe1fa;
    `}
`;
const LinkConainer = styled(Link)`
  text-decoration: none;
  color: white;
`;

const ModalContainer = styled.div`
  margin: auto;
  position: relative;
  z-index: 2;
`;
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;
const ModalView = styled.div.attrs(() => ({
  role: "dialog",
}))`
  position: absolute;
  top: calc(50vh - 100px);
  left: calc(50vw - 185px);
  background-color: #1b262c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 400px;
  height: 150px;
`;
const ModalCloseBtn = styled.button`
  background-color: #1b262c;
  color: #eaeaea;
  text-decoration: none;
  border: none;
  position: absolute;
  top: 10%;
  cursor: pointer;
  font-size: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 20px;
  color: #333;
  border: 1px solid #0f4c75;
  background-color: #1b262c;
  color: #eaeaea;

  &:focus {
    outline: none;
    border-color: #0f4c75;
  }
`;

const Footer = ({ curruntPage, handleItemCreate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, setText] = useState("");
  const modalOpenHandler = (e) => {
    setIsModalOpen(true);
  };
  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onCreate = () => {
    handleItemCreate(text);
    modalCloseHandler();
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onCreate();
      setText("");
    }
  };

  return (
    <>
      <FooterContainer>
        <HabitButton curruntPage={curruntPage}>
          <LinkConainer to={`/`}>습관</LinkConainer>
        </HabitButton>
        <CreateButtonContainer>
          <CreateButton onClick={modalOpenHandler}>+</CreateButton>
        </CreateButtonContainer>
        <DailyButton curruntPage={curruntPage}>
          <LinkConainer to={`/daily`}>일일 과제</LinkConainer>
        </DailyButton>
      </FooterContainer>
      <ModalContainer>
        {isModalOpen && (
          <ModalBackdrop>
            <ModalView>
              <ModalCloseBtn onClick={modalCloseHandler}>x</ModalCloseBtn>
              <Input type="text" value={text} onChange={onChange} onKeyPress={onKeyPress}></Input>
            </ModalView>
          </ModalBackdrop>
        )}
      </ModalContainer>
    </>
  );
};

export default Footer;
