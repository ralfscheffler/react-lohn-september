import { parseISO } from "date-fns";

const GetStunden = (start, end) => {
  const hourinMillisec = 3600000;
  const date1 = new Date(start);
  const date2 = parseISO(end);
  const result = Math.abs(date1 - date2) / hourinMillisec;

  return result;
};

export default GetStunden;
