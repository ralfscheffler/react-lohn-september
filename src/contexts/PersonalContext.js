import { createContext, useState } from "react";

export const PersonalContext = createContext();

const PersonalContextProvider = (props) => {
  const [person, setPerson] = useState();

  const updatePerson = (person) => {
    setPerson(person);
  };
  return (
    <PersonalContext.Provider value={{ person, updatePerson }}>
      {props.children}
    </PersonalContext.Provider>
  );
};

export default PersonalContextProvider;
