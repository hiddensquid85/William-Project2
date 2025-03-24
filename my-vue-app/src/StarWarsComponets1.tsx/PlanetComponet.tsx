import React, { useEffect } from "react";
import { Planets,Characters,Film , Starship} from "../commontypes";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../store";
import { setCharacters, setFilms, setPlanets, setSelectedFilm } from "../starshipSlice";
import '../modelTable.css';
import { fetchPlanets } from "../fetchComponets";

export const PlanetComponent: React.FC = () => {
    const dispatch = useDispatch();
    const planets = useSelector((state: RootState) => state.starship.planets);
    const selectedFilm = useSelector((state: RootState) => state.starship.selectedFilm);
  
    useEffect(() => {
      if (selectedFilm) {
        const fetchData = async () => {
          const data = selectedFilm.planets ? await fetchPlanets(selectedFilm.planets) : [];
          dispatch(setPlanets(data));
        };
        fetchData();
      }
    }, [selectedFilm, dispatch]);
  
    return (
      <table>
        <tbody>
          {planets.map((item: Planets, index: number) => (
            <tr key={index}>
              <td>Planet: {item.Name}</td>
              <td>Planet climate: {item.climate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };