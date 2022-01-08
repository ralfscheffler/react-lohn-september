import { useRef, useState, useEffect } from "react";

import manipulatePersonalShiftData from "./manipulatePersonalShiftData";

const SummenReport = (start, end, personalData, shiftData) => {
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
      return null;
    });
  }
  personalShiftData = manipulatePersonalShiftData(personalShiftData, null);
  return console.log(personalShiftData);
};

export default SummenReport;
