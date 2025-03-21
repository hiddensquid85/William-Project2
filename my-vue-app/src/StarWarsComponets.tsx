import React, { useEffect } from "react";
import { Planets,Characters,Film , Starship} from "./commontypes";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "./store";
import { setCharacters, setSelectedFilm } from "./starshipSlice";
import { fetchCharacters } from "./fetchComponets";
import './modelTable.css';




export const StarshipComponent: React.FC<{ entity: Starship[] }> = ({ entity }) => (
    <div>
     {/*  <h1>Starship: {entity.name}</h1>
      <p>Model: {entity.model}</p> */}
    </div>
  );


export const PlanetComponent: React.FC<{ entity: Planets[] }> = ({ entity }) => {
  return (
    <table>
    <tbody>
    {entity.map((item: Planets, index: number) => (
      <tr key={index}   >
        <td>Birth year:{item.Name}</td>
        <td>
          <span>Eyecolor: {item.climate}</span>
        </td>
      </tr>
    ))}
</tbody>
</table>
  );
};

  export const CharacterComponent: React.FC<{ entity: Characters[] }> = ({ entity }) => {
  
 
    return (
      <table>
      <tbody>
      {entity.map((item: Characters, index: number) => (
        <tr key={index}   >
          <td>Birth year:{item.birth_year}</td>
          <td>
            <span>Eyecolor: {item.eye_color}</span>
          </td>
        </tr>
      ))}
  </tbody>
</table>
    );
  };

  export const FilmComponent: React.FC<{ entity: Film[] }> = ({ entity }) => {

    const dispatch = useDispatch();
const selectedFilm = useSelector((state: RootState) => state.starship.selectedFilm);


    const handleOnClick = (film: Film) => {
      dispatch(setSelectedFilm(film))

    }

    return(
    <table>
      <tbody>
      {entity.map((item: Film, index: number) => (
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

  /*   
              {entity.map((item, index) => {
                      

                       /*   const setSelectedFilm = (item: Film) => setSelectedStarWars(item); */
             
                       /*   return (
                           <tr
                             key={index}
                             onClick={() => dispatch(setSelectedStarWars(item))}
                             className={selectedStarWars && isFilm(selectedStarWars) && selectedStarWars.title === item.title ? "highlighted" : ""}

                           >
                             <td>{item.title}</td>
                             <td>
                               <span>Director: {item.producer}</span>
                             </td>
                           </tr>
                         );
                       } else {
                         return null; */
                   /*     } */ 
                     
              
/* 
    <div>
      <h1>Film: {entity.title}</h1>
      <p>Director: {entity.director}</p>
      <p>Producer: {entity.producer}</p>
    </div> */
  

 
