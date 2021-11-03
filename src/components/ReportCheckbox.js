const handleClick = () => {
  return 0;
};

const ReportCheckbox = () => {
  return (
    <div className="container-md py-2">
      <div className="form-check col-sm-6">
        <input
          className="form-check-input"
          type="checkbox"
          name="fest"
          id="fest"
          value=""
          checked={false}
          onClick={handleClick}
          readOnly
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
          checked={false}
          onClick={handleClick}
          readOnly
        />
        <label className="form-check-label" htmlFor="mini">
          Mini
        </label>
      </div>
    </div>
  );
};

export default ReportCheckbox;
