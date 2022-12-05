import React from "react";
import styled from "styled-components";
import List from "./List";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const StyledText = styled.div`
  margin-top: 70px;
  text-align: center;
  font-weight: 700;
`;

const Lists = ({ listData = [], handleItemToggle, handleItemRemove }) => {
  return (
    // 얘는 리스트 페이지마다 놔줘야하나?
    <TodoListBlock>
      {listData.length ? (
        listData.map((list) => (
          <List
            key={list.id}
            id={list.id}
            text={list.text}
            done={list.done}
            handleToggle={handleItemToggle}
            handleRemove={handleItemRemove}
          />
        ))
      ) : (
        <StyledText>아직 할일이 없어요.</StyledText>
      )}
    </TodoListBlock>
  );
};

export default Lists;
