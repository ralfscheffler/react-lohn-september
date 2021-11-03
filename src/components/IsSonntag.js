import { isSunday, parseISO } from "date-fns";

const IsSonntag = (start, end) => {
    
    return ( isSunday(parseISO(start))||isSunday(parseISO(end)) );
}
 
export default IsSonntag;