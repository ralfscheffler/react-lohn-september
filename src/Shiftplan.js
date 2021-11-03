import { useContext } from "react";
import { PersonalContext } from "./contexts/PersonalContext";
import useFetch from "./components/useFetch";
import ShiftHeader from "./components/ShiftHeader";
import ShiftBody from "./components/ShiftBody";

const Shiftplan = () => {
  const { person } = useContext(PersonalContext);
  const url = `http://scheffler-hardcore.de:2010/hardcore/dp/DP_T_Plan?$expand=stamm_id&$filter=stamm_id EQ ${person.id}`;
  const data = useFetch(url);

  return (
    <div className="schichtplan">
      <h2>Schichtplan fuer {person.Name}</h2>
      {data && <ShiftHeader data={data} />}
      {data && <ShiftBody data={data} person={person} />}
    </div>
  );
};

export default Shiftplan;
