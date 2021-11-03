import React,{createContext,useState} from 'react';

export const LocationContext = createContext();

const LocationContextProvider = (props) => {
    const [firma, setFirma] = useState('');
    
    const updateFirma = (firma) =>{
        setFirma(firma);
    };
    return (
        <LocationContext.Provider value={{firma, updateFirma}} >
            {props.children}
        </LocationContext.Provider>
    )
}
 
export default LocationContextProvider;