import React from "react";
import './modelTable.css';
import { Modeller } from "./commontypes";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedStarship } from './starshipSlice';
import { RootState } from './store';


interface ModelTableProp {
  modeller : Modeller[];
}

const ModelTable: React.FC<ModelTableProp> = ({ modeller}) => {
  const dispatch = useDispatch();
  const selectedStarship = useSelector((state:RootState) => state.starship.selectedStarship);

  
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Model</th>
          <th>Manufacturer</th>
        </tr>
      </thead>
      <tbody>
        {modeller.map((item, index) => (
          <tr
            key={index}
            onClick={() => dispatch(setSelectedStarship(item))}
            className={selectedStarship?.Name === item.Name ? "highlighted" : ""}
          >
            <td>{item.Name}</td>
            <td>{item.Model}</td>
            <td>{item.Manufacturer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ModelTable;



