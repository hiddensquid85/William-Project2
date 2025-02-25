import React, { useContext } from "react";
import './modelTable.css'
import { Modeller } from "./commontypes";
import { StarShipContext } from './App'


interface ModelTableProp {
  modeller : Modeller[];
  setSelectedStarShip:(starship:Modeller) => void;
}

const ModelTable: React.FC<ModelTableProp> = ({ modeller, setSelectedStarShip}) => {
  const  selectedStarShip = useContext(StarShipContext);

  
  return (
    <table className="table">
      <thead>
        <tr>
          <th >Name</th>
          <th >Model</th>
          <th >Manufacturer</th>
        </tr>
      </thead>
      <tbody>
      
      {modeller.map((item,index) => (
          <tr key={index} 
          onClick={() => setSelectedStarShip (item)} 
          className={selectedStarShip?.Name === item.Name? "highlighted" : ""}
           >
            
            <td>{item.Name}</td>

            <td>{item.Model}</td>

            <td>{item.Manufacturer}</td>
          </tr>
        ))}

      </tbody>
    </table>
  )
};

export default ModelTable



