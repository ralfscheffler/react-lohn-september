import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      if (result.status === 200) {
        setData(result.data.value);
      }
      console.log("fetched");
    };
    fetchData();
  }, []);
  return data;
};

export default useFetch;
