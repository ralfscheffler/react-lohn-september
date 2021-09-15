const PersonalButtens = ({
  i,
  enabled,
  data,
  handleNext,
  handlePrev,
  handleEdit,
  handleDelete,
  handleSubmit,
}) => {
  return (
    <div className="container-md d-flex justify-content-between">
      <button
        type="button"
        className="btn btn-primary btn-lg col-2"
        onClick={handleNext}
        disabled={i >= data.length - 1}
      >
        Vor
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg col-2"
        onClick={handlePrev}
        disabled={i === 0}
      >
        Zurück
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg col-2"
        onClick={handleEdit}
        disabled={enabled}
      >
        Edit
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg col-2"
        onClick={handleDelete}
        disabled={enabled}
      >
        Delete
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg col-2"
        onClick={handleSubmit}
        disabled={!enabled}
      >
        Save
      </button>
    </div>
  );
};

export default PersonalButtens;
