import GetStunden from "./GetStunden";

import { isSameDay, parseISO } from "date-fns";
//import IsDayShift from "./IsDayShift";
import IsFirstNightShift from "./IsFirstNightShift";
import GetNachMitternacht from "./GetNachMitternacht";
//import { useState } from "react";
//import { useEffect } from "react";
import IsSonntag from "./IsSonntag";
import SonntagsZuschlag from "./SonntagsZuschlag";
import "../css/ShiftFooter.css";
import {
  GetGesamtlohn,
  GetGrundlohn,
  GetNachtzuschlag1,
  GetNachtzuschlag2,
} from "./LohnHelper";

const ShiftFooter = ({ shift, person }) => {
  //const [stunden, setStunden] = useState();
  //const [lohn, setLohn] = useState();
  //const numberFormat = new Intl.NumberFormat({ minimumFractionDigits: 2 });
  const options2 = { style: "currency", currency: "EUR" };
  const numberFormat2 = new Intl.NumberFormat("de-DE", options2);

  let tempStd = {
    gesamtStunden: 0,
    nachtSchicht1: 0,
    nachtSchicht2: 0,
    sonntagsSchicht: 0,
  };
  let tempLohn = {
    grundLohn: 0,
    gesamtLohn: 0,
    sonntagsZuschlag: 0,
    nachtschichtZuschlag: 0,
    afterMidnightZuschlag: 0,
    feiertagsZuschlag: 0,
  };

  shift.map((item) => {
    // var beforeMidnight = isSameDay(
    //   parseISO(item.starttime),
    //   parseISO(item.endtime)
    // );
    if (IsSonntag(item.starttime, item.endtime)) {
      tempStd.sonntagsSchicht += SonntagsZuschlag(item.starttime, item.endtime);
    }

    // var istTagschicht = IsDayShift(
    //   parseISO(item.starttime),
    //   parseISO(item.endtime)
    // );

    tempStd.nachtSchicht1 += parseFloat(
      IsFirstNightShift(parseISO(item.endtime), parseISO(item.starttime))
    );

    if (!isSameDay(parseISO(item.starttime), parseISO(item.endtime))) {
      tempStd.nachtSchicht2 += parseFloat(
        GetNachMitternacht(item.starttime, item.endtime)
      );
    }

    tempStd.gesamtStunden += GetStunden(item.starttime, item.endtime);
    return null;
  });

  //tempLohn.grundLohn = tempStd.gesamtStunden * person?.fkLohnartID?.Stundenlohn;
  tempLohn.grundLohn = GetGrundlohn(
    tempStd.gesamtStunden,
    person?.fkLohnartID?.Stundenlohn
  );
  // getGrundlohn function
  //tempLohn.nachtschichtZuschlag =
  //  tempStd.nachtSchicht1 * (person?.fkLohnartID?.Stundenlohn / 4);
  tempLohn.nachtschichtZuschlag = GetNachtzuschlag1(
    tempStd.nachtSchicht1,
    person?.fkLohnartID?.Stundenlohn
  );
  // getNacht1Zuschlag function
  //tempLohn.afterMidnightZuschlag =
  //  tempStd.nachtSchicht2 * (person?.fkLohnartID?.Stundenlohn * 0, 4);
  tempLohn.afterMidnightZuschlag = GetNachtzuschlag2(
    tempStd.nachtSchicht2,
    person?.fkLohnartID?.Stundenlohn
  );
  // getNacht2Zuschlag - function
  tempLohn.gesamtLohn = GetGesamtlohn(
    tempLohn.sonntagsZuschlag,
    tempLohn.grundLohn,
    tempLohn.nachtschichtZuschlag,
    tempLohn.afterMidnightZuschlag
  );
  //tempLohn.sonntagsZuschlag +
  //tempLohn.grundLohn +
  //tempLohn.nachtschichtZuschlag +
  //tempLohn.afterMidnightZuschlag;
  // getGesamtLohn function
  //console.log(tempLohn.gesamtLohn)

  //  useEffect(() => {
  //    setStunden(tempStd);
  //    setLohn(tempLohn);
  //  });

  return (
    <div className="footer fixed-bottom container-md py-4">
      <form className="row g-3">
        <div className="col-sm">
          <label htmlFor="gesamtstunden" className="form-label">
            Gesamtstunden:
          </label>
          <input
            value={tempStd?.gesamtStunden.toLocaleString("de-DE", {
              minimumFractionDigits: 2,
            })}
            id="gesamtstunden"
            className="form-control"
            readOnly
          />
        </div>
        <div className="col-sm">
          <label htmlFor="nachtschicht1" className="form-label">
            Nachtschicht1:
          </label>
          <input
            value={tempStd?.nachtSchicht1.toLocaleString("de-DE", {
              minimumFractionDigits: 2,
            })}
            id="nachtschicht1"
            className="form-control"
            readOnly
          />
        </div>
        <div className="col-sm">
          <label htmlFor="nachtschicht2" className="form-label">
            Nachtschicht2:
          </label>
          <input
            value={tempStd?.nachtSchicht2.toLocaleString("de-DE", {
              minimumFractionDigits: 2,
            })}
            id="nachtschicht2"
            className="form-control"
            readOnly
          />
        </div>
        <div className="col-sm">
          <label htmlFor="sonntag" className="form-label">
            Sonntag:
          </label>
          <input
            value={tempStd?.sonntagsSchicht.toLocaleString("de-DE", {
              minimumFractionDigits: 2,
            })}
            id="sonntag"
            className="form-control"
            readOnly
          />
        </div>
        <div className="col-sm">
          <label htmlFor="grundlohn" className="form-label">
            Grundlohn:
          </label>
          <input
            value={numberFormat2.format(tempLohn?.grundLohn)}
            id="grundlohn"
            className="form-control"
            readOnly
          />
        </div>
        <div className="col-sm">
          <label htmlFor="nacht1zuschlag" className="form-label">
            Nacht1:
          </label>
          <input
            value={numberFormat2.format(tempLohn?.nachtschichtZuschlag)}
            id="nacht1zuschlag"
            className="form-control"
            readOnly
          />
        </div>
        <div className="col-sm">
          <label htmlFor="nacht2zuschlag" className="form-label">
            Nacht2:
          </label>
          <input
            value={numberFormat2.format(tempLohn?.afterMidnightZuschlag)}
            id="nacht2zuschlag"
            className="form-control"
            readOnly
          />
        </div>
        <div className="col-sm">
          <label htmlFor="sonntagszuschlag" className="form-label">
            Sonntagszuschlag:
          </label>
          <input
            value={numberFormat2.format(tempLohn?.sonntagsZuschlag)}
            id="sonntagszuschlag"
            className="form-control"
            readOnly
          />
        </div>
        <div className="col-sm">
          <label htmlFor="gesamtlohn" className="form-label">
            Gesamtlohn:
          </label>
          <input
            value={numberFormat2.format(tempLohn?.gesamtLohn)}
            id="gesamtlohn"
            className="form-control"
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default ShiftFooter;
