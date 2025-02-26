import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Modeller } from "./commontypes";

interface StarShipState {
    selectedStarship: Modeller | null;
    starships: Modeller[];
}

const initialState: StarShipState = {
    selectedStarship: null,
    starships: [],
  };

const starShipSlice = createSlice({
    name: 'starship',
    initialState,
    reducers: {
        setSelectedStarship: (state, action:PayloadAction<Modeller>) => {
            state.selectedStarship = action.payload;
        },
        setStarship: (state, action:PayloadAction<Modeller[]>) => {
            state.starships = action.payload;
        },    
    },
});

export const {setSelectedStarship, setStarship} = starShipSlice.actions;
export default starShipSlice.reducer;