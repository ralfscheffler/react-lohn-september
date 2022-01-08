import { endOfDay, isSunday, parseISO } from "date-fns";
import IsNextDay from "./IsNextDay";

const GetSonntagsSchicht= (start, end) => {
  const todaySonntag = isSunday(parseISO(start));
  const nextDaySonntag = IsNextDay(start, end);

  start = new Date(start);
  end = new Date(end);

  if (todaySonntag && !nextDaySonntag) {
    return parseFloat((Math.abs(end - start) / 3600000).toFixed(2));
  }
  if (!todaySonntag && nextDaySonntag) {
    return parseFloat((Math.abs(endOfDay(start) - end) / 3600000).toFixed(2));
  }else{
    return(0)
  }
};

export default GetSonntagsSchicht;