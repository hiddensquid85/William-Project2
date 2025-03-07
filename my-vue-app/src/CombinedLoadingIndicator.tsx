import React from 'react';
import './CombinedLoadingIndicator.css';

interface CombinedLoadingIndicatorProps {
  progress: number; 
}

const CombinedLoadingIndicator: React.FC<CombinedLoadingIndicatorProps> = ({ progress }) => {
  return (
    <div className="loading-container">
      <div
        className="loading-bar"
        style={{ width: `${progress}%` }} 
      >
        <div className="loading-bar-inner"></div> 
      </div>
    </div>
  );
};

export default CombinedLoadingIndicator