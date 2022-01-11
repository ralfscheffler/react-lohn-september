//import ReportCheckbox from "./components/ReportCheckbox";
import { useReducer } from "react";
import { useContext, useState } from "react";
import ReportButtons from "./components/ReportButtons";
import { PersonalDataContext } from "./contexts/PersonalDataContext";
import useFetch from "./components/useFetch";
import ReportZeitraum from "./components/ReportZeitraum";
import SummenReport from "./components/SummenReport";

// function SummenReport(props) {
//   return <h1>Summenliste</h1>;
// }

function Einzelnachweis(props) {
  return <h1>Einzelnachweis</h1>;
}

function reducer(state, { type, payload }) {
  switch (type) {
    case "anfang":
      return { ...state, start: payload };
    case "ende":
      return { ...state, end: payload };
    default:
      throw new Error();
  }
}

const Reports = () => {
  const { personalData } = useContext(PersonalDataContext);
  const [isSummenReport, setSummenReport] = useState(2);

  // const urlShift =
  //   "http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Plan?$expand=stamm_id/fkLohnartID";

  // const shiftData = useFetch(urlShift);

  const initialState = {
    start: new Date().toISOString().slice(0, 10),
    end: new Date().toISOString().slice(0, 10),
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const urlShift = `http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Plan?$expand=stamm_id/fkLohnartID&$filter=starttime GE ${state.start} and starttime LE ${state.end}`;

  const shiftData = useFetch(urlShift);

  return (
    <div className="wrapper">
      <div className="container-md">
        <ReportZeitraum state={state} dispatch={dispatch} />
        <ReportButtons setSummenReport={setSummenReport} />

        {/* {(() => {
          if (isSummenReport === 1) {
            return (
              <SummenReport personalData={personalData} shiftData={shiftData} />
            );
          } else if (isSummenReport === 0) {
            return <Einzelnachweis />;
          }
        })()} */}
        {isSummenReport === 0 ? (
          <Einzelnachweis />
        ) : (
          <SummenReport personalData={personalData} shiftData={shiftData} />
        )}
      </div>
    </div>
  );
};

export default Reports;
