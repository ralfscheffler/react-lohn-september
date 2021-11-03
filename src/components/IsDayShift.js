import { parseISO } from "date-fns";

const IsDayShift = (start, end) => {
  const shiftEnd = "20:00:00";
  const temp = start.toDateString();
  const refString = temp + " " + shiftEnd;
  const refDT = new Date(refString);

  return end <= refDT;
};

export default IsDayShift;
