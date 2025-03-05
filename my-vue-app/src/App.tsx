// App.tsx
import { useEffect } from "react";
import axiosInstance from './axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { setStarship, setPlanets, setCharacters, setFilms } from './starshipSlice';
import { RootState } from './store';
import ModelTable from "./modelTable";
import ModelDetail from "./ModelDetail";
import { Characters, Film, Modeller, Planets } from "./commontypes";
import { useProgress } from './ProgressContext';
import ProgressBar from './ProgressBar';

function App() {
  const dispatch = useDispatch();
  const starships = useSelector((state: RootState) => state.starship.starships);
  const planets = useSelector((state: RootState) => state.starship.planets);
  const characters = useSelector((state: RootState) => state.starship.characters);
  const films = useSelector((state: RootState) => state.starship.films);
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

  async function fetchPlanets(): Promise<Planets[]> {
    try {
      const response = await axiosInstance.get('https://swapi.dev/api/planets/', {
        onDownloadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          if (total) {
            setProgress(Math.round((loaded * 100) / total));
          }
        },
      });
      return response.data.results.map((planet: any) => ({
        Name: planet.name,
        System: planet.climate,
      }));
    } catch (error) {
      console.error('Error fetching planets:', error);
      return [];
    }
  }

  async function fetchCharacters(): Promise<Characters[]> {
    try {
      const response = await axiosInstance.get('https://swapi.dev/api/people/', {
        onDownloadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          if (total) {
            setProgress(Math.round((loaded * 100) / total));
          }
        },
      });
      return response.data.results.map((character: any) => ({
        Name: character.name,
        Age: character.birth_year,
        LightSaber: character.skin_color,
      }));
    } catch (error) {
      console.error('Error fetching characters:', error);
      return [];
    }
  }

  async function fetchFilms(): Promise<Film[]> {
    try {
      const response = await axiosInstance.get('https://swapi.dev/api/films/', {
        onDownloadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          if (total) {
            setProgress(Math.round((loaded * 100) / total));
          }
        },
      });
      return response.data.results.map((film: any) => ({
        Title: film.title,
        Director: film.director,
      }));
    } catch (error) {
      console.error('Error fetching films:', error);
      return [];
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [starshipData, planetsData, charactersData, filmsData] = await Promise.all([
          fetchStarships(),
          fetchPlanets(),
          fetchCharacters(),
          fetchFilms(),
        ]);

        dispatch(setStarship([...initialModeller, ...starshipData]));
        dispatch(setPlanets(planetsData));
        dispatch(setCharacters(charactersData));
        dispatch(setFilms(filmsData));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setProgress(100); // Set progress to 100% when all data is fetched
      }
    };

    fetchData();
  }, [dispatch, setProgress]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Star Wars Universe</h1>
      {progress < 100 && <ProgressBar progress={progress} />}

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Films Section */}
        <div style={{ flex: 1 }}>
          <h2>Films</h2>
          <ModelTable modeller={films} />
        </div>

        {/* Characters Section */}
        <div style={{ flex: 1 }}>
          <h2>Characters</h2>
          <ModelTable modeller={characters} />
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {/* Planets Section */}
        <div style={{ flex: 1 }}>
          <h2>Planets</h2>
          <ModelTable modeller={planets} />
        </div>

        {/* Starships Section */}
        <div style={{ flex: 1 }}>
          <h2>Starships</h2>
          <ModelTable modeller={starships} />
        </div>
      </div>

      {/* Detailed Info Section */}
      <div style={{ marginTop: "20px" }}>
        <h2>Detailed Info</h2>
        <ModelDetail />
      </div>
    </div>
  );
}

export default App;