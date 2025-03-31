import React, { useEffect } from "react";
import { Starship} from "../commontypes";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../store";
import { setStarship } from "../starshipSlice";
import '../modelTable.css';
import {  fetchStarships } from "../fetchComponets";



export const StarShipsComponent: React.FC = () => {
    const dispatch = useDispatch();
    const Starship = useSelector((state: RootState) => state.starship.starships);
    const selectedFilm = useSelector((state: RootState) => state.starship.selectedFilm);
  
    useEffect(() => {
      if (selectedFilm) {
        const fetchData = async () => {
          const data = selectedFilm.starships ? await fetchStarships(selectedFilm.starships) : [];
          dispatch(setStarship(data));
        };
        fetchData();
      }
    }, [selectedFilm, dispatch]);
  
    return (
      <table>
        <tbody>
          {Starship.map((item: Starship, index: number) => (
            <tr key={index}>
              <td>Birth year: {item.manufacturer}</td>
              <td>Eye color: {item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };