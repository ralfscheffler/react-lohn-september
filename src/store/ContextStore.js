import { atom } from "jotai";

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

export const firmaAtom = atom([]);
export const locationAtom = atom("");
export const personalAtom = atom({});

export const personalDataAtom = atom(initialValue);
export const prevPersonalDataAtom = atom(initialValue);
