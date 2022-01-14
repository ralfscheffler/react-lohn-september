import { useContext } from "react";
import useFetch from "./useFetch";
import manipulatePersonalShiftData from "./manipulatePersonalShiftData";
import { PersonalDataContext } from "../contexts/PersonalDataContext";

const Summenliste = ({ start, end }) => {
  const { personalData } = useContext(PersonalDataContext);

  end = new Date(end);
  end.setDate(end.getDate() + 1); // enddatum muss um 1 Tag erhöht werden damit es nicht ausgeschlossen wird
  end = end.toISOString().slice(0, 10);

  let url = `http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Plan?$expand=stamm_id/fkLohnartID&$filter=starttime GE ${start} and starttime LE ${end}`;

  const shiftData = useFetch(url);

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

export default Summenliste;
