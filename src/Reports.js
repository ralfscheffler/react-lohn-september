//import ReportCheckbox from "./components/ReportCheckbox";
import { useReducer } from "react";
import { useContext } from "react";
import ReportButtons from "./components/ReportButtons";
import { PersonalDataContext } from "./contexts/PersonalDataContext";
import useFetch
 from "./components/useFetch";
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
  const urlShift =
    "http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Plan?$expand=stamm_id/fkLohnartID";

  const shiftData=useFetch(urlShift)

  const initialState = {
    start: new Date().toISOString().slice(0, 10),
    end: new Date().toISOString().slice(0, 10),
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="wrapper">
      <div className="container-md">
        <form className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="starttime" className="form-label">
              Beginn:
            </label>
            <input
              type="date"
              className="form-control"
              id="starttime"
              name="starttime"
              value={state.start}
              onChange={(event) =>
                dispatch({ type: "anfang", payload: event.target.value })
              }
            />
          </div>

          <div className="col-sm-6 ">
            <label htmlFor="endtime" className="form-label">
              Ende:
            </label>
            <input
              type="date"
              className="form-control"
              id="endtime"
              name="endtime"
              value={state.end}
              onChange={(event) =>
                dispatch({ type: "ende", payload: event.target.value })
              }
            />
          </div>
        </form>

        <ReportButtons
          start={state.start}
          end={state.end}
          personalData={personalData}
          shiftData={shiftData}
        />
      </div>
    </div>
  );
};

export default Reports;
