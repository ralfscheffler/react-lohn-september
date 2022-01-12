//import { useRef, useState, useEffect } from "react";

import manipulatePersonalShiftData from "./manipulatePersonalShiftData";

const SummenReport = ({ personalData, shiftData }) => {
  let personalShiftData = [];

  if (personalData && shiftData) {
    personalData.map((item) => {
      var personalID = item.id;
      const result = shiftData.filter(
        (shift) => shift.stamm_id.id === personalID
      );
      if (result.length > 0) {
        item.schicht = result;
        personalShiftData.push(item);
      }
    });
  }
  personalShiftData = manipulatePersonalShiftData(personalShiftData, null);

  return (
    <div className="container">
      {personalShiftData.map((person) => (
        <div key={person.id}>
          Name:
          {person.Name} {person.Betrieb}
          {person.schicht.map((item) => (
            <div>
              <span>{item.starttime}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SummenReport;
