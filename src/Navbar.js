import "./css/w3.css";

import { useState, useEffect, useContext } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import { LocationContext } from "./contexts/LocationContext";
import { useAtom } from "jotai";
import { firmaAtom, locationAtom } from "./store/ContextStore";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from "react";
//const router = useRouter();
function Switchtab(e) {
  const tabs = document.getElementsByClassName("tablink");

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("w3-red");
  }
  e.target.classList.add("w3-red");
  //if(e.currentTarget.id==='stdf'){
  //}
}

const Navbar = () => {
  //const { updateFirma } = useContext(LocationContext);
  //const [data, setData] = useState();
  const [data, setData] = useAtom(firmaAtom);
  const [, setLocation] = useAtom(locationAtom);
  //const [location, setLocation] =useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "http://scheffler-hardcore.de:2010/hardcore/dp/DP_L_Location"
      );
      setData(result.data.value);
      setLocation(result.data.value[0].name); //Nachtleben
      //updateFirma(result.data.value[0].name);
    };
    fetchData();
  }, []);

  const handleLoginClick = () => {};

  return (
    <div className="w3-bar w3-black">
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <Link to={{ pathname: "/Personalform" }}>
          <button
            id="pers"
            className="w3-bar-item w3-button tablink w3-red"
            onClick={(e) => {
              Switchtab(e);
            }}
          >
            Personal Verwaltung
          </button>
        </Link>
      </Suspense>
      <Link to="/Shiftplan">
        <button
          id="stdf"
          className="w3-bar-item w3-button tablink"
          onClick={(e) => {
            Switchtab(e);
          }}
        >
          Stundeneingabe
        </button>
      </Link>
      <Link to="/Reports">
        <button
          id="rep"
          className="w3-bar-item w3-button tablink"
          onClick={(e) => {
            Switchtab(e);
          }}
        >
          Reporte
        </button>
      </Link>
      <Link to="/Einstellungen">
        <button
          id="einst"
          className="w3-bar-item w3-button tablink"
          onClick={(e) => {
            Switchtab(e);
          }}
        >
          Einstellungen
        </button>
      </Link>

      <select
        className="w3-select w3-bar-item w3-margin-right w3-right"
        onChange={(e) => setLocation(e.target.value)}
      >
        {data && data.map((item) => <option key={item.id}>{item.name}</option>)}{" "}
        ;
      </select>
      <button
        id="login"
        className="w3-bar-item w3-button w3-right w3-margin-right"
        onClick={handleLoginClick}
      >
        anmelden
      </button>
    </div>
  );
};

export default Navbar;
