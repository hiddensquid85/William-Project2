import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from './store';

const ModelDetail: React.FC = () => {
  const selectedStarship = useSelector((state: RootState) => state.starship.selectedStarship);

  if (!selectedStarship) {
    return <div>Select a starship to see the details</div>;
  }

  return (
    <div>
      <h2>Starship Details</h2>
      <p><strong>Name:</strong> {selectedStarship.Name}</p>
      <p><strong>Model:</strong> {selectedStarship.Model}</p>
      <p><strong>Manufacturer:</strong> {selectedStarship.Manufacturer}</p>
    </div>
  );
};

export default ModelDetail;
