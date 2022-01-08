import GetNachMitternacht from "./GetNachMitternacht";
import GetNachtschicht from "./GetNachtschicht";
import GetSonntagsSchicht from "./GetSonntagsSchicht";
import GetStunden from "./GetStunden";
import { parseISO } from "date-fns";
import {
  GetGrundlohn,
  GetNachtzuschlag1,
  GetNachtzuschlag2,
  GetSonntagszuschlag,
  GetGesamtlohn,
} from "./LohnHelper";

const manipulatePersonalShiftData = (data, feierTage) => {
  let Stundenlohn = 0;
  console.log(feierTage);
  data.map((item) => {
    Stundenlohn = typeof (item.fkLohnartID.Stundenlohn !== "undefined")
      ? item.fkLohnartID.Stundenlohn
      : 0;
    console.log(Stundenlohn);
    return item.schicht.map((shift) => {
      //prototypen
      shift.Stunden = GetStunden(shift.starttime, shift.endtime);
      shift.Basislohn = GetGrundlohn(shift.Stunden, Stundenlohn);
      shift.nachtschicht1 = GetNachtschicht(
        parseISO(shift.endtime),
        parseISO(shift.starttime)
      );
      shift.Nachtzuschlag1 = GetNachtzuschlag1(
        shift.nachtschicht1,
        Stundenlohn
      );
      shift.nachtschicht2 = GetNachMitternacht(shift.starttime, shift.endtime);
      shift.Nachtzuschlag2 = GetNachtzuschlag2(
        shift.nachtschicht2,
        Stundenlohn
      );
      shift.sonntagschicht = GetSonntagsSchicht(shift.starttime, shift.endtime);
      shift.Sonntagszuschlag = GetSonntagszuschlag(
        shift.sonntagschicht,
        Stundenlohn
      );
      shift.Gesamtlohn = GetGesamtlohn(
        shift.Basislohn,
        shift.Nachtzuschlag1,
        shift.Nachtzuschlag2,
        shift.Sonntagszuschlag
      );
      return null;
    });
  });
  //console.log(data)
  return data;
};

export default manipulatePersonalShiftData;
