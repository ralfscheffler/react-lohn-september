import { createContext, useState } from "react";

export const PersonalDataContext = createContext();

const PersonalDataContextProvider = (props) => {
  const [personalData, setPersonalData] = useState();

  const updatePersonalData = (personalData) => {
    setPersonalData(personalData);
  };

  return (
    <PersonalDataContext.Provider value={{ personalData, updatePersonalData }}>
      {props.children}
    </PersonalDataContext.Provider>
  );
};

export default PersonalDataContextProvider;
