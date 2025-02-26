
import { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setStarship } from './starshipSlice';
import { RootState } from './store';
import ModelTable from "./modelTable";
import ModelDetail from "./ModelDetail";
import { Modeller } from "./commontypes";


// export const StarShipContext = createContext<Modeller | null> (null);

function App() {
  
  const dispatch = useDispatch();
  const starships = useSelector((state: RootState) => state.starship.starships);

  const initialModeller: Modeller[] = [
    { Name: 'Falcon 1', Model: 'F1', Manufacturer: 'SpaceX' },
    { Name: 'Falcon 9', Model: 'F9', Manufacturer: 'SpaceX' },
    // Add more entries as needed
  ];


  
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
      return initialModeller;
    }
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const modellerData = await fetchStarships();
        dispatch(setStarship([...initialModeller, ...modellerData]));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);
   
  return (
    <div style={{ padding: "20px" }}>
      <h1>Model Collection</h1>
      <ModelTable modeller={starships} />
      <ModelDetail/>
    </div>

    );
}
export default App;