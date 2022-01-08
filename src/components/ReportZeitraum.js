const ReportZeitraum = ({ state, dispatch }) => {
  return (
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
  );
};

export default ReportZeitraum;
