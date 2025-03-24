import React, { useEffect } from "react";
import { Planets,Characters,Film , Starship} from "./commontypes";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "./store";
import { setCharacters, setFilms, setSelectedFilm } from "./starshipSlice";
import { fetchCharacters } from "./fetchComponets";
import './modelTable.css';
import axiosInstance from "./axiosInstance";





// export const StarshipComponent: React.FC<{ entity: Starship[] }> = ({ entity }) => (
//     <div>
//      {/*  <h1>Starship: {entity.name}</h1>
//       <p>Model: {entity.model}</p> */}
//     </div>
//   );


// export const PlanetComponent: React.FC<{ entity: Planets[] }> = ({ entity }) => {
//   return (
//     <table>
//     <tbody>
//     {entity.map((item: Planets, index: number) => (
//       <tr key={index}   >
//         <td>Birth year:{item.Name}</td>
//         <td>
//           <span>Eyecolor: {item.climate}</span>
//         </td>
//       </tr>
//     ))}
// </tbody>
// </table>
//   );
// };


export const CharacterComponent: React.FC = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state: RootState) => state.starship.characters);
  const selectedFilm = useSelector((state: RootState) => state.starship.selectedFilm);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedFilm) {
        const data = selectedFilm.characters ? await fetchCharacters(selectedFilm.characters) : [];

        dispatch(setCharacters(data));
       
      }
    };

    fetchData();
  }, [selectedFilm]); // Add selectedFilm as a dependency

  return (
    <table>
      <tbody>
        {characters.map((item: Characters, index: number) => (
          <tr key={index}>
            <td>Birth year: {item.birth_year}</td>
            <td>
              <span>Eye color: {item.eye_color}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

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
          setProgress(100);
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


function setProgress(arg0: number) {
 
}
  
 
