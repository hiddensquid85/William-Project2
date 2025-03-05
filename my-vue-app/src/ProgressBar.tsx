// ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px' }}>
      <div
        style={{
          width: `${progress}%`,
          height: '10px',
          backgroundColor: '#76c7c0',
          borderRadius: '5px',
        }}
      />
    </div>
  );
};

export default ProgressBar;