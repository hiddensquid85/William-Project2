import React, { useEffect } from "react";
import { Planets,Characters,Film , Starship} from "../commontypes";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../store";
import { setCharacters, setFilms, setPlanets, setSelectedFilm } from "../starshipSlice";
import '../modelTable.css';
import { fetchPlanets } from "../fetchComponets";



// export const CharacterComponent: React.FC = () => {
//     const dispatch = useDispatch();
//     const characters = useSelector((state: RootState) => state.starship.characters);
//     const selectedFilm = useSelector((state: RootState) => state.starship.selectedFilm);
  
//     useEffect(() => {
//       if (selectedFilm) {
//         const fetchData = async () => {
//           const data = selectedFilm.characters ? await fetchCharacters(selectedFilm.characters) : [];
//           dispatch(setCharacters(data));
//         };
//         fetchData();
//       }
//     }, [selectedFilm, dispatch]);
  
//     return (
//       <table>
//         <tbody>
//           {characters.map((item: Characters, index: number) => (
//             <tr key={index}>
//               <td>Birth year: {item.birth_year}</td>
//               <td>Eye color: {item.eye_color}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };