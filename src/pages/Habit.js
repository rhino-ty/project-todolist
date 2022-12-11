import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Lists from "../components/Lists";
import { deleteHabit } from "../store/slice/listSilce";

const Habit = () => {
  const habitLists = useSelector((state) => state.lists.listData.habitTodos);
  console.log(habitLists);
  const dispatch = useDispatch();
  return (
    <>
      <Lists listData={habitLists} handleItemRemove={(itemId) => dispatch(deleteHabit(itemId))} />
    </>
  );
};

export default Habit;
