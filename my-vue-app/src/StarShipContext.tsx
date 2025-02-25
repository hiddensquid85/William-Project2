import React, { createContext, useState, ReactNode } from "react";
import { Modeller } from "./commontypes";


interface StarShipContextType {
    selectedStarShip: Modeller | null;
    setSelectedStarShip : (starship:Modeller) => void;
}

export const StarShipContext = createContext<StarShipContextType | undefined>(undefined);

export const StarshipProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedStarShip, setSelectedStarShip] = useState<Modeller | null>(null);
      
    
       return (
        <StarShipContext.Provider value={{ selectedStarShip, setSelectedStarShip }}> 
            {children} 
        </StarShipContext.Provider>
    );
};
    

