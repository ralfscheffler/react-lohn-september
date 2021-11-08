const PersonalBody = ({ personal, handleChange, readOnly }) => {
  console.log(personal);
  return (
    <div className="container-md">
      <form className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type="string"
            className="form-control"
            id="Name"
            name="Name"
            value={personal.Name}
            onChange={handleChange}
            readOnly={readOnly}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="Vorname" className="form-label">
            Vorname
          </label>
          <input
            type="string"
            className="form-control"
            id="Vorname"
            name="Vorname"
            value={personal.Vorname}
            onChange={handleChange}
            readOnly={readOnly}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="Strasse" className="form-label">
            Strasse
          </label>
          <input
            type="string"
            className="form-control"
            id="Strasse"
            name="Strasse"
            value={personal.Strasse}
            onChange={handleChange}
            readOnly={readOnly}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="PLZ" className="form-label">
            Plz
          </label>
          <input
            type="string"
            className="form-control"
            id="PLZ"
            name="PLZ"
            value={personal.PLZ}
            onChange={handleChange}
            readOnly={readOnly}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="Ort" className="form-label">
            Ort
          </label>
          <input
            type="string"
            className="form-control"
            id="Ort"
            name="Ort"
            value={personal.Ort}
            onChange={handleChange}
            readOnly={readOnly}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            name="Email"
            value={personal.Email}
            onChange={handleChange}
            readOnly={readOnly}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="Handy" className="form-label">
            Handy
          </label>
          <input
            type="string"
            className="form-control"
            id="Handy"
            name="Handy"
            value={personal.Handy}
            onChange={handleChange}
            readOnly={readOnly}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="Staatsangehoerigkeit" className="form-label">
            Staatsangehoerigkeit
          </label>
          <input
            type="string"
            className="form-control"
            id="Staatsangehoerigkeit"
            name="Staatsangehoerigkeit"
            value={personal.Staatsangehoerigkeit}
            onChange={handleChange}
            readOnly={readOnly}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="Geburtsdatum" className="form-label">
            Geburtsdatum
          </label>
          <input
            type="date"
            className="form-control"
            id="Geburtsdatum"
            name="Geburtsdatum"
            value={personal.Geburtsdatum}
            onChange={handleChange}
            readOnly={readOnly}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="Betrieb" className="form-label">
            Betrieb
          </label>
          <input
            type="string"
            className="form-control"
            id="Betrieb"
            name="Betrieb"
            value={personal.Betrieb}
            onChange={handleChange}
            readOnly={readOnly}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="farbe" className="form-label">
            farbe
          </label>
          <input
            type="color"
            className="form-control"
            id="farbe"
            name="farbe"
            value={personal.farbe}
            onChange={handleChange}
            readOnly={readOnly}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalBody;
