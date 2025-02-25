
import { Modeller } from "./commontypes";
import axios from 'axios';
import { useState,useEffect, createContext } from "react";
import ModelTable from "./modelTable";
import ModelDetail from "./ModelDetail";


export const StarShipContext = createContext<Modeller | null> (null);

function App() {
  

  const initialModeller: Modeller[] = [
    { Name: 'Falcon 1', Model: 'F1', Manufacturer: 'SpaceX' },
    { Name: 'Falcon 9', Model: 'F9', Manufacturer: 'SpaceX' },
    // Add more entries as needed
  ];



  const [tableProp, setTableProp] = useState<Modeller[]>(initialModeller);
  const [selectedStarship, setSelectedStarship] = useState<Modeller | null>(null);


  
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

          console.log("anropa fetch data");

       // console.log("starship",modellerData);
        

        // Update the state with the new data while preserving the previous state

         setTableProp(prevState => [...prevState, ...modellerData]);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
   
  return (
    <StarShipContext.Provider value={selectedStarship}>
    <div style={{ padding: "20px" }}>
      <h1>Model Collection</h1>
      <ModelTable modeller={tableProp} setSelectedStarShip ={setSelectedStarship}   />
      <ModelDetail/>
    </div>
    </StarShipContext.Provider>
    );
}
export default App;