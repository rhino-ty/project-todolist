import React from "react";
import Lists from "../components/Lists";
import useFetch from "../util/useFetch";
import Loading from "../components/Loading";

const Habit = ({ habitLists }) => {
  const { list } = useFetch("http://localhost:3001/habitTodos");
  console.log(list);

  return (
    <>
      {/* <Lists listData={habitLists} handleItemRemove={handleItemRemove} /> */}
      {list ? <Lists listData={list} /> : <Loading />}
    </>
  );
};

export default Habit;
