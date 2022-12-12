import React, { useEffect } from "react";
import Lists from "../components/Lists";
import useFetch from "../util/useFetch";
import Loading from "../components/Loading";
import { listDelete, listUpdate } from "../util/todoApi";

const Habit = () => {
  const url = "http://localhost:3001/habitTodos";
  const { list, loading } = useFetch(url);

  const handleItemRevise = (id, data) => {
    console.log(id);
    listUpdate(url, id, data);
  };

  const handleItemRemove = (id) => {
    console.log(id);
    listDelete(url, id);
  };

  // side effect 때문에 listData가 구성될때 한번 리렌더링되게 하기!
  useEffect(() => {}, [list]);

  return (
    <>
      {!loading && list ? (
        <Lists listData={list} handleItemRevise={handleItemRevise} handleItemRemove={handleItemRemove} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Habit;
