import { parseISO,endOfDay } from "date-fns";

const GetNachMitternacht = (start, end) => {
    
    
        const mitternacht = endOfDay(parseISO(start));
        const nachtende = parseISO(end);
        
       
    return ( 
        (Math.abs(mitternacht - nachtende) / 3600000).toFixed(2)
     );
}
 
export default GetNachMitternacht;