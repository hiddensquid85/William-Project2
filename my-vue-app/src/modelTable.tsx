import React from "react";
import './assets/modelTable.css'
import { useState } from "react";
import { tableProp } from "./commontypes";


const ModelTable: React.FC<tableProp> = ({ modeller }) => {
  const [selectedStarship, setStarship] = useState<number>(0);

  const handleRowClick =  (index : number) => {
    setStarship(index)
  };


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
          onClick={() => handleRowClick (index)} 
          className={selectedStarship === index? "highlighted" : ""}
           >
            
            <td>{item.Name}</td>

            <td>{item.Model}</td>

            <td>{item.Manufacturer}</td>
          </tr>
        ))}
        <tr>
          <td>selected Star Ship {selectedStarship}</td>
        </tr>
      </tbody>
    </table>
  )
};

export default ModelTable



