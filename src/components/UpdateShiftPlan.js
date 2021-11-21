import axios from "axios";

const UpdateShiftPlan = async (changes) => {
let returnCode= []
  changes.map( async (element)=>{
    var id = parseInt(element.id);
    var url=`http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Plan(${id})`;
    var data = await axios.patch(url, element);
    //return (console.log(data))
    return returnCode.push(data.statusText)
  })
return (returnCode) 
};

export default UpdateShiftPlan;
