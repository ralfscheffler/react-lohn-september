// const handleEinzel = (start, end) => {};

// const handleSumme = (start, end, personalData, shiftData) => {
//   SummenReport(start, end, personalData, shiftData);
// };

//const ReportButtons = ({ start, end, personalData, shiftData }) => {
const ReportButtons = ({ setSummenReport }) => {
  //console.log('rB',personalData)
  return (
    <div className="container-md d-flex justify-content-between py-5">
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={() => setSummenReport(0)}
      >
        Einzelnachweis
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={() => setSummenReport(1)}
      >
        Summenliste
      </button>
    </div>
  );
};

export default ReportButtons;
