import React from "react";
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
  &:hover ${Remove} {
    display: block;
  }
`;

const List = ({ id, text, done, handleToggle, handleRemove }) => {
  return (
    <>
      <TodoItemBlock>
        {/* <CheckCircle onClick={() => handleToggle(id)} done={done}>
          {done && <AiOutlineCheck fontSize="small" />}
        </CheckCircle>
        <Text done={done}>{text}</Text>
        <Remove onClick={() => handleRemove(id)}>
          <AiOutlineDelete fontSize="small" />
        </Remove> */}
        <CheckCircle></CheckCircle>
        <Text>{text}</Text>
        <Remove></Remove>
      </TodoItemBlock>
    </>
  );
};

export default List;
