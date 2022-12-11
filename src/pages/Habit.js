import React, { useEffect } from "react";
import Lists from "../components/Lists";
import useFetch from "../util/useFetch";
import Loading from "../components/Loading";
import { listDelete } from "../util/todoApi";

const Habit = () => {
  const { list, loading } = useFetch("http://localhost:3001/habitTodos");
  const handleItemRemove = (id) => {
    console.log(id);
    listDelete("http://localhost:3001/habitTodos", id);
  };

  // side effect 때문에 listData가 구성될때 한번 리렌더링되게 하기!
  useEffect(() => {}, [list]);

  return <>{!loading && list ? <Lists listData={list} handleItemRemove={handleItemRemove} /> : <Loading />}</>;
};

export default Habit;
