import GetShiftdata from "./GetShiftdata";

const handleEinzel = (start, end) => {
  
};
const handleSumme = (start,end,personalData,shiftData)=>{
  GetShiftdata(start,end, personalData,shiftData)
  console.log(start,end,personalData, shiftData)
}

const ReportButtons = ({ start, end , personalData, shiftData}) => {
  //console.log('rB',personalData)
  return (
    <div className="container-md d-flex justify-content-between py-5">
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={() => handleEinzel(start, end)}>
        Einzelnachweis
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={() => handleSumme(start, end, personalData,shiftData)}>
        Summenliste
      </button>
    </div>
  );
};

export default ReportButtons;
