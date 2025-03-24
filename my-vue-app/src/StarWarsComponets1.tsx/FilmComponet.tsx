import React, { useEffect } from "react";
import { Planets,Characters,Film , Starship} from "../commontypes";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../store";
import { setCharacters, setFilms, setSelectedFilm } from "../starshipSlice";
import '../modelTable.css';


import axiosInstance from "../axiosInstance";

export const FilmComponent: React.FC = () => {

    
  async function fetchFilms(): Promise<Film[]> {
    try {
      const response = await axiosInstance.get('https://swapi.dev/api/films/', {

      });
      
      const data: Film[] = await response.data.results as Film[];
      data[0].type = "Film";

      return data;
    }
     catch (error) {
      console.error('Error fetching films:', error);
      return [];
    }
  }

  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const filmsData = await fetchFilms();
          dispatch(setFilms(filmsData));
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          
        }
      };
  
      fetchData();
    }, []);

    const dispatch = useDispatch();
    
const Films = useSelector((state: RootState) => state.starship.films);
const selectedFilm = useSelector((state: RootState) => state.starship.selectedFilm);


    const handleOnClick = (film: Film) => {
      dispatch(setSelectedFilm(film))

    }

    return(
    <table>
      <tbody>
      {Films && Films.map((item: Film, index: number) => (
        <tr key={index} onClick={() => handleOnClick(item)}  className={
          selectedFilm && selectedFilm.title === item.title ? "highlighted" : ""
        }>
          <td>{item.title}</td>

          <td>
            <span>Director: {item.producer}</span>
          </td>
        </tr>
      ))}
  </tbody>
</table>
  );
  };