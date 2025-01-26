import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import ModelTable from './App.tsx';


const App: React.FC = () => {
  const modellerData = [
    {Name: "CR90 corvette", Model: "CR90 corvette", Manufacturer: "Corellian Engineering Corporation"},
    {Name: "Star Destroyer", Model: "Imperial I-class Star Destroyer", Manufacturer: "Kuat Drive Yards"},
    {Name: "Millennium Falcon", Model: "YT-1300 light freighter", Manufacturer: "Corellian Engineering Corporation"},
  ]

  return (
    <div style={{ padding: "20px" }}>
      <h1>Model Collection</h1>
      <ModelTable modeller={modellerData} rows={3} columns={3} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);






