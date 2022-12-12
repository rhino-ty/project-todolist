import React, { useState } from "react";
import styled, { css } from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

const CheckCircle = styled(AiOutlineCheck)`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #ced4da;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;

  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

const Remove = styled(AiOutlineDelete)`
  color: #dee2e6;
  font-size: 20px;
  cursor: pointer;
  display: none;
  position: absolute;
  right: 0;

  &:hover {
    color: #bbe1fa;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 20px;
  color: #333;
  border: 1px solid #ccc;
  /* border-radius: 4px; */

  &:focus {
    outline: none;
    border-color: #333;
  }
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
const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  position: absolute;
  top: calc(50vh - 100px);
  left: calc(50vw - 200px);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 400px;
  height: 150px;
`;
const ModalCloseBtn = styled.button`
  background-color: #fff;
  color: #000;
  text-decoration: none;
  border: none;
  position: absolute;
  top: 10%;
  cursor: pointer;
  font-size: 20px;
`;

const List = ({ id, text, done, handleToggle, handleRevise, handleRemove }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [revisedText, setRevisedText] = useState(text);

  const modalOpenHandler = (e) => {
    setIsModalOpen(true);
  };
  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };

  const onChange = (e) => {
    setRevisedText(e.target.value);
  };
  const onRevise = () => {
    handleRevise(id, revisedText);
    modalCloseHandler();
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onRevise();
    }
  };

  const onToggle = () => {
    handleToggle(id);
  };
  const onRemove = () => {
    handleRemove(id);
  };

  return (
    <>
      <TodoItemBlock>
        <CheckCircle></CheckCircle>
        <Text onClick={modalOpenHandler}>{text}</Text>
        <Remove onClick={onRemove} />
      </TodoItemBlock>
      <ModalContainer>
        {isModalOpen && (
          <ModalBackdrop>
            <ModalView>
              <ModalCloseBtn onClick={modalCloseHandler}>x</ModalCloseBtn>
              <Input type="text" value={revisedText} onChange={onChange} onKeyPress={onKeyPress}></Input>
            </ModalView>
          </ModalBackdrop>
        )}
      </ModalContainer>
    </>
  );
};

export default List;
