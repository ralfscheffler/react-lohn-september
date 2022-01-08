import { endOfDay } from "date-fns";


const GetNachtschicht = (end, start) => {
  const shiftEnd = "20:00:00";
  const temp = start.toDateString();
  const refString = temp + " " + shiftEnd;
  const refDT = new Date(refString);
  if (end > refDT && start >= refDT) {
    return parseFloat((Math.abs(start - endOfDay(start)) / 3600000).toFixed(2));
  } else if (end > refDT && start < refDT) {
    return parseFloat((Math.abs(refDT - end) / 3600000).toFixed(2));
  } else {
    return 0;
  }

  //return ( end > refDT && end<=endOfDay(start) );
};

export default GetNachtschicht;
