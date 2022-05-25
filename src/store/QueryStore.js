import { atom } from "jotai";
import { atomWithQuery } from "jotai/query";
import axios from "axios";

//export const urlAtom = atom();

export const urlAtom = atom("");
export const userAtom = atomWithQuery((get) => {
  const url = get(urlAtom);
  return {
    queryKey: ["users", url],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  };
});
