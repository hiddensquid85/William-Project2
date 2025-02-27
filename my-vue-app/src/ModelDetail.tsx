import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Characters, Film, Modeller, Planets } from "./commontypes"; // Film is used in the union type

const ModelDetail: React.FC = () => {
  const selectedStarship = useSelector((state: RootState) => state.starship.selectedStarship);

  if (!selectedStarship) {
    return <div>Select an item to see the details</div>;
  }

  return (
    <div>
      <h2>Details</h2>
      {'Name' in selectedStarship && <p><strong>Name:</strong> {selectedStarship.Name}</p>}
      {'Title' in selectedStarship && <p><strong>Title:</strong> {selectedStarship.Title}</p>}
      {'Model' in selectedStarship && <p><strong>Model:</strong> {selectedStarship.Model}</p>}
      {'Manufacturer' in selectedStarship && <p><strong>Manufacturer:</strong> {selectedStarship.Manufacturer}</p>}
      {'System' in selectedStarship && <p><strong>System:</strong> {selectedStarship.System}</p>}
      {'Age' in selectedStarship && <p><strong>Age:</strong> {selectedStarship.Age}</p>}
      {'LightSaber' in selectedStarship && <p><strong>LightSaber:</strong> {selectedStarship.LightSaber}</p>}
      {'Director' in selectedStarship && <p><strong>Director:</strong> {selectedStarship.Director}</p>}
    </div>
  );
};

export default ModelDetail;