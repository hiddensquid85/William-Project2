// App.tsx
import { useEffect } from "react";
import axiosInstance from './axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { setStarship, setPlanets, setCharacters, setFilms } from './starshipSlice';
import { RootState } from './store';
import ModelDetail from "./ModelDetail";
import { StarWarsEntity, Characters, Film, Planets, Starship, Modeller } from "./commontypes";

import { useProgress } from './ProgressContext';
import ProgressBar from './ProgressBar';

import StarWarsParentComponent from "./StarWarsParentComponent";
import { fetchCharacters, fetchPlanets } from "./fetchComponets";
import { FilmComponent } from "./StarWarsComponets1.tsx/FilmComponet";
import { CharacterComponent } from "./StarWarsComponets1.tsx/CharacterComponet";
import { PlanetComponent } from "./StarWarsComponets1.tsx/PlanetComponet";
import { StarShipsComponent } from "./StarWarsComponets1.tsx/StarShipComponet";
import SecondPage from "./sidor/sida1";
import CharacterStarWars from './sidor/sida2';
import CharacterPage from "./sidor/sida2";






function App() {
  const dispatch = useDispatch();
  const starships = useSelector((state: RootState) => state.starship.starships);
  const planets = useSelector((state: RootState) => state.starship.planets);
  const characters = useSelector((state: RootState) => state.starship.characters);
  const films = useSelector((state: RootState) => state.starship.films);
  const selectedfilm= useSelector((state: RootState) => state.starship.selectedFilm);
  const { progress, setProgress } = useProgress();

  const initialModeller: Modeller[] = [
    { Name: 'Falcon 1', Model: 'F1', Manufacturer: 'SpaceX' },
    { Name: 'Falcon 9', Model: 'F9', Manufacturer: 'SpaceX' },
  ];

  async function fetchStarships(): Promise<Modeller[]> {
    try {
      const response = await axiosInstance.get('https://swapi-api.hbtn.io/api/starships/', {
        onDownloadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          if (total) {
            setProgress(Math.round((loaded * 100) / total));
          }
        },
      });
      return response.data.results.map((ship: any) => ({
        Name: ship.name,
        Model: ship.model,
        Manufacturer: ship.manufacturer,
      }));
    } catch (error) {
      console.error('Error fetching starships:', error);
      return [];
    }
  }

  

 


  




  return (
    // <div style={{ padding: "20px" }}>
    //   <h1>Star Wars Universe</h1>
    //   {progress < 100 && <ProgressBar progress={progress} />}

    //   <div style={{ display: "flex", gap: "20px" }}>
    //     {/* Films Section */}
    //     <div style={{ flex: 1 }}>
    //       <h2>Films</h2>
    //       {<FilmComponent />}
    //     </div>

    //     {/* Characters Section */}
    //     <div style={{ flex: 1 }}>
    //       <h2>Characters</h2>
    //      {  <CharacterComponent   /> }
    //     </div>
    //   </div>

    //   <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
    //     {/* Planets Section */}
    //     <div style={{ flex: 1 }}>
    //       <h2>Planets</h2>
    //     {   <PlanetComponent />}
    //     </div>

    //     {/* Starships Section */}
    //     <div style={{ flex: 1 }}>
    //       <h2>Starships</h2>
    //    {<StarShipsComponent />}
    //     </div>
    //   </div>

    //   {/* Detailed Info Section */}
    //   <div style={{ marginTop: "20px" }}>
    //     <h2>Detailed Info</h2>
    //     <ModelDetail />
    //   </div>
    // </div>

  <div>
  <SecondPage />

  </div>
  
  );
}

export default App;