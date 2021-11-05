import { useContext, useEffect, useState } from "react";

//import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./components/useFetch";

import { LocationContext } from "./contexts/LocationContext";

import Savetodb from "./components/Savetodb";
import diff from "./components/diff";
import { PersonalContext } from "./contexts/PersonalContext";
import { PersonalDataContext } from "./contexts/PersonalDataContext";
import PersonalBody from "./components/PersonalBody";
import PersonalZuschlag from "./components/PersonalZuschlag";
import PersonalLohn from "./components/PersonalLohn";
import PersonalButtons from "./components/PersonalButtons";
import axios from "axios";

var i = 0;
const initialValue = {
  Name: "",
  Vorname: "",
  Strasse: "",
  PLZ: "",
  Ort: "",
  Handy: "",
  Email: "",
  Staatsangehoerigkeit: "",
  Geburtsdatum: "",
  Betrieb: "",
  farbe: "",
  fkJobsID: { minijob: null, fest: null, student: null, gleitzone: null },
  fkLohnartID: { Festlohn: null, Stundenlohn: null, MaxStunden: null },
};
const Personalform = () => {
  const [personal, setPersonal] = useState({
    Name: "",
    Vorname: "",
    Strasse: "",
    PLZ: "",
    Ort: "",
    Handy: "",
    Email: "",
    Staatsangehoerigkeit: "",
    Geburtsdatum: "",
    Betrieb: "",
    farbe: "",
    fkJobsID: { minijob: null, fest: null, student: null, gleitzone: null },
    fkLohnartID: { Festlohn: null, Stundenlohn: null, MaxStunden: null },
  });

  const [readOnly, setReadonly] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [prevPersonalData, setPrevPersonalData] = useState("");
  const [action, setAction] = useState(1); //action = edit
  const { firma } = useContext(LocationContext);
  const { updatePerson } = useContext(PersonalContext);
  const { updatePersonalData } = useContext(PersonalDataContext);

  const url =
    "http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Mitarbeiter?$expand=fkJobsID,fkLohnartID&$filter=contains(Betrieb,  " +
    "'" +
    firma +
    "'" +
    ")";
  //console.log(url);

  const data = useFetch(url);

  //console.log(data);

  useEffect(() => {
    data && setPersonal(data[i]); //(i = 0)
    data && updatePerson(data[i]);
    data && updatePersonalData(data);
  }, [data]);

  const handleNext = (e) => {
    e.preventDefault();
    if (edit) {
      return;
    }
    i++;
    if (i > data.length - 1) {
      i = data.length - 1;
    }
    setPersonal(initialValue);
    setPersonal(data[i]);
    updatePerson(data[i]);
  };

  const handlePrev = (e) => {
    e.preventDefault();

    if (edit) {
      return;
    }

    i--;
    if (i < 0) {
      i = 0;
    } else {
      setPersonal(initialValue);
      setPersonal(data[i]);
      updatePerson(data[i]);
    }
  };
  const handleNewRec = async (e) => {
    data.push(initialValue); //neues leeres Array ans Ende
    //setPersonal(data[data.length]);
    //setPersonal(initialValue);
    //setPersonal(data[data.length] - 1);
    updatePerson(data[data.length - 1]);
    setPersonal(data[data.length - 1]);
    alert("new Record");
    setReadonly(false);
    setEnabled(true);
    setEdit(true);
    setAction(0);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const result = await axios.get(
      `http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Plan?$expand=stamm_id&$filter=stamm_id EQ ${personal.id}`
    );
    result.data.value &&
      result.data.value.map(async (rec) => {
        var res = await axios.delete(
          `http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Plan(${rec.id})`
        );
        if (res.status != 204) {
          alert(`löschen fehlgeschlagen mit status ${res.status}`);
        }
      });
    // console.log("Delete wurde geklickt.");
    // alert(personal.id);
    // console.log(personal.id);
    const res = await axios.delete(
      `http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Mitarbeiter(${personal.id})`
    );
    alert(res.status);
    //Das Arrayelement muss noch entfernt werden.
    data.splice(i, 1);
    //console.log(data);

    setPersonal(data[i]);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setReadonly(false);
    setEnabled(true);
    setEdit(true);
    setPrevPersonalData(personal);
  };

  function handleChange(evt) {
    //const value = evt.target.checked ? 1 : 0;
    const value = evt.target.value;
    setPersonal({ ...personal, [evt.target.name]: value });
    //console.log(...personal);
  }

  function handleJobChange(evt) {
    const value = evt.target.checked ? 1 : 0;

    setPersonal({
      ...personal,
      fkJobsID: { ...personal.fkJobsID, [evt.target.name]: value },
    });
  }

  function handleLohnChange(evt) {
    let value;
    //const value = parseFloat(evt.target.value);
    if (evt.currentTarget.id === "zu_nacht1") {
      value = evt.target.checked ? 1 : 0;
    } else {
      value = parseFloat(evt.target.value);
    }

    setPersonal({
      ...personal,
      fkLohnartID: { ...personal.fkLohnartID, [evt.target.name]: value },
    });
  }
  // probiere onValueChange Handler

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEdit(false);
    setEnabled(false);
    setReadonly(true);

    if (action === 1) {
      const patchData = diff(prevPersonalData, personal);

      if (Object.keys(patchData).length !== 0) {
        const res = await Savetodb(
          "http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Mitarbeiter(" +
            personal.id +
            ")",
          patchData,
          "patch"
        );
        console.log(res);

        data[i] = personal;
        setPersonal(data[i]);
      }
    } else {
      console.log(personal);
      const result = await axios.post(
        "http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Mitarbeiter",
        personal
      );
      console.log(result);
    }
  };
  console.log("render");
  return (
    <>
      {data && (
        <PersonalBody
          personal={personal}
          handleChange={handleChange}
          readOnly={readOnly}
        />
      )}
      {data && (
        <PersonalZuschlag
          personal={personal}
          handleJobChange={handleJobChange}
          handleLohnChange={handleLohnChange}
          readOnly={readOnly}
        />
      )}
      {data && (
        <PersonalLohn
          personal={personal}
          handleLohnChange={handleLohnChange}
          readOnly={readOnly}
        />
      )}
      {data && (
        <PersonalButtons
          i={i}
          enabled={enabled}
          data={data}
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleNewRec={handleNewRec}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default Personalform;
