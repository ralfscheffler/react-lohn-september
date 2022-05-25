import { useContext, useEffect, useState } from "react";

//import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./components/useFetch";

import { LocationContext } from "./contexts/LocationContext";

import Savetodb from "./components/Savetodb";
import diff from "./components/diff";
//import { PersonalContext } from "./contexts/PersonalContext";
//import { PersonalDataContext } from "./contexts/PersonalDataContext";
import PersonalBody from "./components/PersonalBody";
import PersonalZuschlag from "./components/PersonalZuschlag";
import PersonalLohn from "./components/PersonalLohn";
import PersonalButtons from "./components/PersonalButtons";
import axios from "axios";
import { useAtomValue, useUpdateAtom } from "jotai/utils";

import {
  locationAtom,
  personalAtom,
  personalDataAtom,
  prevPersonalDataAtom,
} from "./store/ContextStore";
import { editAtom, enabledAtom, readOnlyAtom } from "./store/SettingsStore";
import { useAtom } from "jotai";
import { urlAtom, userAtom } from "./store/QueryStore";

var i = 0;
const initialValue = {
  Name: "",
  Vorname: "",
  Strasse: "",
  PLZ: "",
  Ort: "",
  Staatsangehoerigkeit: "",
  Geburtsdatum: "",
  Betrieb: "",
  farbe: "",
  fkJobsID: { minijob: null, fest: null, student: null, gleitzone: null },
  fkLohnartID: { Festlohn: null, Stundenlohn: null, MaxStunden: null },
};
const Personalform = () => {
  // const [personal, setPersonal] = useState({
  //   Name: "",
  //   Vorname: "",
  //   Strasse: "",
  //   PLZ: "",
  //   Ort: "",
  //   Staatsangehoerigkeit: "",
  //   Geburtsdatum: "",
  //   Betrieb: "",
  //   farbe: "",
  //   fkJobsID: { minijob: null, fest: null, student: null, gleitzone: null },
  //   fkLohnartID: { Festlohn: null, Stundenlohn: null, MaxStunden: null },
  // });
  const [personal, setPersonal] = useAtom(personalAtom);
  // const [readOnly, setReadonly] = useState(true);
  // const [enabled, setEnabled] = useState(false);
  // const [edit, setEdit] = useState(false);
  const [readOnly, setReadonly] = useAtom(readOnlyAtom);
  const [enabled, setEnabled] = useAtom(enabledAtom);
  const [edit, setEdit] = useAtom(editAtom);
  //const [prevPersonalData, setPrevPersonalData] = useState("");
  const [prevPersonalData, setPrevPersonalData] = useAtom(prevPersonalDataAtom);
  const firma = useAtomValue(locationAtom);
  //const { firma } = useContext(LocationContext);
  //const { updatePerson } = useContext(PersonalContext);
  //const { updatePersonalData } = useContext(PersonalDataContext);
  const updatePersonalData = useUpdateAtom(personalDataAtom);
  const [, setUrl] = useAtom(urlAtom);

  //setUrl(`http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Mitarbeiter`);

  const url =
    "http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Mitarbeiter?$expand=fkJobsID,fkLohnartID&$filter=contains(Betrieb,  " +
    "'" +
    firma +
    "'" +
    ")";

  useEffect(() => {
    setUrl(url);
  }, []);
  console.log(firma);
  const [data] = useAtom(userAtom);
  //console.log(url);

  //const data = useFetch(url);

  //console.log(data);

  useEffect(() => {
    data && setPersonal(data[i]); //(i = 0)
    //data && updatePerson(data[i]);
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
    //updatePerson(data[i]);
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
      // updatePerson(data[i]);
    }
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    const data = await axios.get(
      `http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Plan?$expand=stamm_id&$filter=stamm_id EQ ${personal.id}`
    );
    data &&
      data.data.value.map(async (item) => {
        await axios.delete(
          `http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Plan(${item.id})`
        );
      });
    const res = await axios.delete(
      `http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Mitarbeiter(${personal.id})`
    );

    console.log("Delete wurde geklickt.");
    console.log(data);
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
  };

  const handleNew = () => {
    setPrevPersonalData(personal);
    setPersonal(initialValue);
    setReadonly(false);
    setEnabled(true);
    setEdit(true);
  };

  const handleCancel = () => {
    setPersonal(prevPersonalData);
    setEdit(!edit);
    setEnabled(!enabled);
    setReadonly(!readOnly);
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
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          handleNew={handleNew}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
};

export default Personalform;
