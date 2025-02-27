import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Characters, Film, Modeller, Planets } from "./commontypes";

interface StarShipState {
    starships: Modeller[];
    planets: Planets[];
    characters: Characters[];
    films: Film[];
    selectedStarship: Modeller | Planets | Characters | Film | null;
}

const initialState: StarShipState = {
    starships: [],
    planets: [],
    characters: [],
    films: [],
    selectedStarship: null,
  };

  const starShipSlice = createSlice({
    name: 'starship',
    initialState,
    reducers: {
      setSelectedStarship: (state, action: PayloadAction<Modeller | Planets | Characters | Film>) => {
        state.selectedStarship = action.payload;
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
    },
  });

  export const { setSelectedStarship, setStarship, setPlanets, setCharacters, setFilms } = starShipSlice.actions;
export default starShipSlice.reducer;