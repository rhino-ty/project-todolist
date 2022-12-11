import React from "react";
import Lists from "../components/Lists";
import useFetch from "../util/useFetch";
import Loading from "../components/Loading";
import { listDelete } from "../util/todoApi";

const Habit = () => {
  const { list } = useFetch("http://localhost:3001/habitTodos");
  const handleItemRemove = (id) => {
    // const id = e.target.dataset.id;
    console.log(id);
    listDelete("http://localhost:3001/habitTodos", id);
  };

  return (
    <>
      {/* <Lists listData={habitLists} handleItemRemove={handleItemRemove} /> */}
      {list ? <Lists listData={list} handleItemRemove={handleItemRemove} /> : <Loading />}
    </>
  );
};

export default Habit;
