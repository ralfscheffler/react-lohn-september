const PersonalButtens = ({
  i,
  enabled,
  data,
  handleNext,
  handlePrev,
  handleNewRec,
  handleEdit,
  handleDelete,
  handleSubmit,
  handleCancel,
  cancel,
}) => {
  return (
    <div className="container-md d-flex justify-content-between">
      <button
        type="button"
        className="btn btn-primary btn-lg col-1"
        onClick={handleNext}
        disabled={i >= data.length - 1}>
        Vor
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg col-1"
        onClick={handlePrev}
        disabled={i === 0}>
        Zurück
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg col-1"
        onClick={handleEdit}
        disabled={enabled}>
        Edit
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg col-1"
        onClick={handleNewRec}
        disabled={enabled}>
        Neu
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg col-1"
        onClick={handleDelete}
        disabled={enabled}>
        Delete
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg col-1"
        onClick={handleSubmit}
        disabled={!enabled}>
        Save
      </button>
      <button
        type="button"
        className="btn btn-danger btn-lg col-1"
        onClick={handleCancel}
        disabled={cancel}>
        Abbruch
      </button>
    </div>
  );
};

export default PersonalButtens;
