import { endOfDay, isSunday, parseISO } from "date-fns";


const SonntagsZuschlag = (start, end) => {
    const todaySonntag = isSunday(parseISO(start));
    const nextDaySonntag = isSunday(parseISO(end));
    if (todaySonntag && !nextDaySonntag) {
        return  parseFloat(
          (Math.abs(end - start) / 3600000).toFixed(2)
        );
      }
      if (!todaySonntag && nextDaySonntag) {
        return parseFloat(
          (
            Math.abs(endOfDay(parseISO(start)) - end) / 3600000
          ).toFixed(2)
        );
      }
}
 
export default SonntagsZuschlag;