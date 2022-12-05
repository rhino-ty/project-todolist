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

const handleItemToggle = () => {};
const handleItemRemove = (id) => {};

// filteredTodos, handleItemToggle, handleItemRemove
const TodoItemList = () => {
  return (
    // 얘는 리스트 페이지마다 놔줘야하나?
    <TodoListBlock>
      {filteredTodos && filteredTodos.length ? (
        filteredTodos.map((todo) => (
          <List
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
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

export default TodoItemList;
