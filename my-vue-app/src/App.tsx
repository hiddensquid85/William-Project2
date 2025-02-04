import ModelTable, {Modeller,tableProp} from "./modelTable";
import axios from 'axios';
import { useState,useEffect } from "react";


function App() {
  
  const modellerData = [
    {Name: "CR90 corvette", Model: "CR90 corvette", Manufacturer: "Corellian Engineering Corporation"},
    {Name: "Star Destroyer", Model: "Imperial I-class Star Destroyer", Manufacturer: "Kuat Drive Yards"},
    {Name: "Millennium Falcon", Model: "YT-1300 light freighter", Manufacturer: "Corellian Engineering Corporation"},
  ]

  const initialModeller: Modeller[] = [
    { Name: 'Falcon 1', Model: 'F1', Manufacturer: 'SpaceX' },
    { Name: 'Falcon 9', Model: 'F9', Manufacturer: 'SpaceX' },
    // Add more entries as needed
  ];



  const [tableProp, setTableProp] = useState<Modeller[]>(initialModeller);


  
  async function fetchStarships(): Promise<Modeller[]> {
    try {
      const response = await axios.get('https://swapi-api.hbtn.io/api/starships/');
      const starships: Modeller[] = response.data.results.map((ship: any) => ({
        Name: ship.name,
        Model: ship.model,
        Manufacturer: ship.manufacturer,
      }));

      return starships;
    } catch (error) {
      console.error('Error fetching starships:', error);
      return tableProp;
    }
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const modellerData = await fetchStarships();
        console.log("starship",modellerData);
        

        // Update the state with the new data while preserving the previous state
        setTableProp((prevTableProp) => ({
          ...prevTableProp,
          modellerData, // Update with new modeller data
        }));
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (

    <div style={{ padding: "20px" }}>
      <h1>Model Collection</h1>
      <ModelTable modeller={tableProp}   />
    </div>


    

    );
}
export default App;