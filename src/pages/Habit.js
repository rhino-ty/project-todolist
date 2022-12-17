import { useEffect } from "react";
import Lists from "../components/Lists";
import useFetch from "../util/useFetch";
import Loading from "../components/Loading";
import {
  listDelete,
  listUpdate,
  doneUpdate,
  listCreate,
} from "../util/todoApi";
import Footer from "../components/Footer";
import { v4 as uuidv4 } from "uuid";

const Habit = () => {
  const url = "http://localhost:3001/habitTodos";
  const { list, loading } = useFetch(url);

  const handleItemToggle = (id, done) => {
    console.log(id);
    doneUpdate(url, id, done);
  };

  const handleItemRevise = (id, data) => {
    console.log(id);
    listUpdate(url, id, data);
  };

  const handleItemRemove = (id) => {
    console.log(id);
    listDelete(url, id);
  };

  const handleItemCreate = (text) => {
    listCreate(url, uuidv4, text);
  };

  // side effect 때문에 listData가 구성될때 한번 리렌더링되게 하기!
  useEffect(() => {}, [list]);

  return (
    <>
      {!loading && list ? (
        <Lists
          listData={list}
          handleItemToggle={handleItemToggle}
          handleItemRevise={handleItemRevise}
          handleItemRemove={handleItemRemove}
        />
      ) : (
        <Loading />
      )}
      <Footer handleItemCreate={handleItemCreate} />
    </>
  );
};

export default Habit;
