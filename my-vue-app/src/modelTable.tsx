import React from "react";
import './modelTable.css';
import { Characters, Film, Modeller, Planets } from "./commontypes"; // Film is used in the union type
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedStarship } from './starshipSlice';
import { RootState } from './store';

interface ModelTableProp {
  modeller: (Modeller | Planets | Characters | Film)[]; // Film is used here
}

const ModelTable: React.FC<ModelTableProp> = ({ modeller }) => {
  const dispatch = useDispatch();
  const selectedStarship = useSelector((state: RootState) => state.starship.selectedStarship);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name/Title</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {modeller.map((item, index) => {
          // Type guard to check if the item has a 'Name' or 'Title' property
          const displayName = 'Name' in item ? item.Name : 'Title' in item ? item.Title : 'N/A';

          return (
            <tr
              key={index}
              onClick={() => dispatch(setSelectedStarship(item))}
              className={selectedStarship && 'Name' in selectedStarship && selectedStarship.Name === displayName ? "highlighted" : ""}
            >
              <td>{displayName}</td>
              <td>
                {'Model' in item && <span>Model: {item.Model}</span>}
                {'Manufacturer' in item && <span>Manufacturer: {item.Manufacturer}</span>}
                {'System' in item && <span>System: {item.System}</span>}
                {'Age' in item && <span>Age: {item.Age}</span>}
                {'LightSaber' in item && <span>LightSaber: {item.LightSaber}</span>}
                {'Director' in item && <span>Director: {item.Director}</span>}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ModelTable;