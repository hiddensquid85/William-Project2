import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Characters, Film, Modeller, Planets } from "./commontypes";

interface StarWarsState {
    starships: Modeller[];
    planets: Planets[];
    characters: Characters[];
    films: Film[] | null;
    selectedStarWars: Modeller | Planets | Characters | Film | null; // Ensure Film is included
    
  selectedPlanet: Planets | null; // New state for selected planet
  selectedFilm: Film | null; // New state for selected film
  selectedCharacter: Characters | null; // New state for selected character


  }
  
  const initialState: StarWarsState = {
    starships: [],
    planets: [],
    characters: [],
    films: null,

    selectedPlanet: null,
    selectedFilm: null,
    selectedCharacter: null,
    selectedStarWars: null
  };

  const starWarsSlice = createSlice({
    name: 'starship',
    initialState,
    reducers: {
      setSelectedStarWars: (state, action: PayloadAction<Modeller | Planets | Characters | Film>) => {
        state.selectedStarWars = action.payload;
      },
      setStarship: (state, action: PayloadAction<Modeller[]>) => {
        state.starships = action.payload;
      },
      setPlanets: (state, action: PayloadAction<Planets[]>) => {
        state.planets = action.payload;
      },
      setCharacters: (state, action: PayloadAction<Characters[]>) => {
        state.characters = action.payload;
      },
      setFilms: (state, action: PayloadAction<Film[]>) => {
        state.films = action.payload;
      },
      setSelectedPlanet: (state, action: PayloadAction<Planets>) => {
        state.selectedPlanet = action.payload;
      },
      setSelectedFilm: (state, action: PayloadAction<Film>) => {
        state.selectedFilm = action.payload;
      },
      setSelectedCharacter: (state, action: PayloadAction<Characters>) => {
        state.selectedCharacter = action.payload;
      },
    },
  });

  export const { setSelectedStarWars: setSelectedStarWars, setStarship, setPlanets, setCharacters, setFilms,setSelectedFilm } = starWarsSlice.actions;
export default starWarsSlice.reducer;