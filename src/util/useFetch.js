import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  //null설정한 이유: 모든 data가 같진 않기 때문
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setList(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { list, loading, error };
}

export default useFetch;
