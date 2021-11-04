const handleValueChange = ({ target: { value } }) => {
  console.log(value);
};

const PersonalLohn = ({ personal, handleLohnChange, readOnly }) => {
  return (
    <div className="container-md py-3">
      <form className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="Festlohn" className="form-label">
            Festlohn
          </label>

          <input
            className="form-control"
            type="number"
            name="Festlohn"
            id="Festlohn"
            onChange={handleLohnChange}
            //value={personal.fkLohnartID?.Festlohn}
            value={Number.parseFloat(personal.fkLohnartID?.Festlohn).toFixed(2)}
            readOnly={readOnly}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="Stundenlohn" className="form-label">
            Stundenlohn
          </label>
          <input
            className="form-control"
            type="number"
            name="Stundenlohn"
            id="Stundenlohn"
            onChange={handleLohnChange}
            //value={personal.fkLohnartID?.Stundenlohn}
            value={Number.parseFloat(personal.fkLohnartID?.Stundenlohn).toFixed(
              2
            )}
            readOnly={readOnly}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="Maxstunden" className="form-label">
            Maximale Stunden
          </label>
          <input
            className="form-control"
            type="number"
            name="Maxstunden"
            id="Maxstunden"
            onChange={handleLohnChange}
            value={personal.fkLohnartID?.MaxStunden}
            readOnly={readOnly}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="MaxLohn" className="form-label">
            Maximaler Lohn
          </label>
          <input
            className="form-control"
            type="number"
            name="MaxLohn"
            id="MaxLohn"
            onChange={handleLohnChange}
            value={Number.parseFloat(personal.fkLohnartID?.MaxLohn).toFixed(2)}
            readOnly={readOnly}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalLohn;
