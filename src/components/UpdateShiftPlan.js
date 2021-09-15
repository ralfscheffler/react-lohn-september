import axios from "axios";

const UpdateShiftPlan = async (shift) => {
  const id = parseInt(shift[0].id);
  const url = `http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Plan(${id})`;
  const data = await axios.patch(url, {
    starttime: shift[0].starttime,
    endtime: shift[0].endtime,
  });
  console.log(data);
};

export default UpdateShiftPlan;
