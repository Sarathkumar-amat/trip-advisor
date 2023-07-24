import { createContext, useContext, useState } from "react"
import { data } from "../data/JsonData";

export const TripSpotContext = createContext();
export function TripSpotProvider({children})
{
    const [spotData,setSpotData] = useState(data.continents);
    const [continentData,setContinentData] = useState();
    const [countryData,setCountryData] = useState();
    const [destinationData,setDestinationData] = useState();

    return (<div>
        <TripSpotContext.Provider value={{spotData,
            setSpotData,
            continentData,
            setContinentData,
            countryData,
            setCountryData,
            destinationData,
            setDestinationData}}>
                
            {children}
        </TripSpotContext.Provider>
    </div>)
}