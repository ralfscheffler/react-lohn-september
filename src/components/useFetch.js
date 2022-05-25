import { useState, useEffect } from "react";
import axios from "axios";
import { atom, useAtom } from "jotai";
import { useUpdateAtom, useAtomValue } from "jotai/utils";
const dataAtom = atom([]);

const useFetch = (url) => {
  const [data, setData] = useState();
  //const [data, setData] = useAtom(dataAtom);
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
