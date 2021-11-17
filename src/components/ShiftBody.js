//mport { Button, Form, Col, Container, ButtonToolbar } from "react-bootstrap";
//import { useForm } from "react-hook-form";
import { useState, useEffect, useMemo } from "react";
import ShiftFooter from "./ShiftFooter";
import UpdateShiftPlan from "./UpdateShiftPlan";
import "../css/ShiftFooter.css";

const getDayName = (datestr, locale) => {
  var date = new Date(datestr);
  return date.toLocaleDateString(locale, { weekday: "long" });
};

const getTime = (datestr, locale) => {
  var date = new Date(datestr);
  return date.toLocaleTimeString(locale);
};

const ShiftBody = ({ data, person }) => {
  const [shift, setShift] = useState([]);
  let shiftForm = [];

  data.map((item) => {
    shiftForm = [...shiftForm, item]; //object in array umwandeln
  });

  useEffect(() => {
    setShift(shiftForm);
  }, []);
  console.log(shift);

  const handleChange = (e) => {
    const value = e.target.value;
    setShift({ ...shift, [e.target.name]: value });
    //console.log(shift);
  };

  const handleDateTimeClick = () => {
    UpdateShiftPlan(shift);
    console.log(shift);
  };
  return (
    <div className="wrapper">
      <div className="container-md">
        {shift &&
          shift.map((item, index) => (
            <div key={item.id}>
              <form className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="starttime" className="form-label">
                    Beginn: {getDayName(item.starttime, "de-DE")}
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="starttime"
                    name="starttime"
                    value={item.starttime}
                    onChange={(e) => {
                      shift[index].starttime = e.target.value;
                      setShift([...shift], shift);
                    }}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="endtime" className="form-label">
                    Ende:{getDayName(item.endtime, "de-DE")}
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="endtime"
                    name="endtime"
                    value={item.endtime}
                    onChange={(e) => {
                      shift[index].endtime = e.target.value;
                      setShift([...shift], shift);
                    }}
                  />
                </div>
              </form>
              <div className="col-12 d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  id="btnReset">
                  <i className="bi bi-x-circle"></i> Abort
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-success"
                  id="btnSend"
                  onClick={handleDateTimeClick}>
                  <i className="bi bi-envelope"></i> Save
                </button>
              </div>
            </div>
          ))}
        <ShiftFooter shift={shift} person={person} />
      </div>
    </div>
  );
};

export default ShiftBody;
