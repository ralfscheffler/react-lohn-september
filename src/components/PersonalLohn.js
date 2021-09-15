

const handleValueChange = ({ target: { value } }) => {
  console.log(value);
}

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
            type="text"
            name="Festlohn"
            id="Festlohn"
            onChange={handleLohnChange}
            value={personal.fkLohnartID?.Festlohn}
            readOnly={readOnly}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="Stundenlohn" className="form-label">
            Stundenlohn
          </label>
          <input
            className="form-control"
            type="text"
            name="Stundenlohn"
            id="Stundenlohn"
            onChange={handleLohnChange}
            value={personal.fkLohnartID?.Stundenlohn}
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
      </form>
    </div>
  );
};

export default PersonalLohn;
