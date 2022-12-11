import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [habitLists, setLists] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setLists(data);
        console.log(data);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }, [url]);

  return habitLists;
};

export default useFetch;
