import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  //null설정한 이유: 모든 data가 같진 않기 때문
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setList(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { list, loading, error };
}

export default useFetch;
