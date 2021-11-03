const PersonalZuschlag = ({
  personal,
  handleJobChange,
  handleLohnChange,
  readOnly,
}) => {
  return (
    <div className="container-md py-2">
      <div className="form-check col-sm-6">
        <input
          className="form-check-input"
          type="checkbox"
          name="fest"
          id="fest"
          value=""
          checked={personal?.fkJobsID?.fest === 1}
          onClick={handleJobChange}
          readOnly={readOnly}
        />
        <label className="form-check-label" htmlFor="fest">
          Fest
        </label>
      </div>
      <div className="form-check col-sm-6">
        <input
          className="form-check-input"
          type="checkbox"
          id="mini"
          name="minijob"
          value=""
          checked={personal?.fkJobsID?.minijob === 1}
          onClick={handleJobChange}
          readOnly={readOnly}
        />
        <label className="form-check-label" htmlFor="mini">
          Mini
        </label>
      </div>
      <div className="form-check col-sm-6">
        <input
          className="form-check-input"
          type="checkbox"
          id="student"
          name="student"
          value=""
          checked={personal?.fkJobsID?.student === 1}
          onClick={handleJobChange}
          readOnly={readOnly}
        />
        <label className="form-check-label" htmlFor="student">
          Student
        </label>
      </div>
      <div className="form-check col-sm-6">
        <input
          className="form-check-input"
          type="checkbox"
          id="zu_nacht1"
          name="zu_nacht1"
          value=""
          checked={personal?.fkLohnartID?.zu_nacht1 === 1}
          onClick={handleLohnChange}
          readOnly={readOnly}
        />
        <label className="form-check-label" htmlFor="zu_nacht1">
          Nachtzuschläge
        </label>
      </div>
    </div>
  );
};

export default PersonalZuschlag;
