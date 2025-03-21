import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Characters, Film, Modeller, Planets } from "./commontypes";

interface StarWarsState {
    starships: Modeller[];
    planets: Planets[];
    characters: Characters[];
    films: Film[] | null;
    selectedFilm: Film | null; // New state for selected film
 


  }
  
  const initialState: StarWarsState = {
    starships: [],
    planets: [],
    characters: [],
    films: null,

    
    selectedFilm: null,
    
};

  const starWarsSlice = createSlice({
    name: 'starship',
    initialState,
    reducers: {
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

      setSelectedFilm: (state, action: PayloadAction<Film>) => {
        state.selectedFilm = action.payload;
      },

    },
  });

  export const { setStarship, setPlanets, setCharacters, setFilms, setSelectedFilm } = starWarsSlice.actions;
  export default starWarsSlice.reducer;