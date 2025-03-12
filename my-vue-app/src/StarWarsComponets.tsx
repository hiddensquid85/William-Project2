import React from "react";
import { Planets,Characters,Film , Starship} from "./commontypes";


export const StarshipComponent: React.FC<{ entity: Starship }> = ({ entity }) => (
    <div>
      <h1>Starship: {entity.name}</h1>
      <p>Model: {entity.model}</p>
    </div>
  );


export const PlanetComponent: React.FC<{ entity: Planets }> = ({ entity }) => (
    <div>
      <h1>Planet: {entity.Name}</h1>
      <p>Climate: {entity.climate}</p>
    </div>
  );

  export const CharacterComponent: React.FC<{ entity: Characters }> = ({ entity }) => (
    <div>
      <h1>Character: {entity.name}</h1>
      <p>Species: {entity.species}</p>
    </div>
  );

  export const FilmComponent: React.FC<{ entity: Film[] }> = ({ entity }) => (
    <>
      {entity.map((item: Film, index: number) => (
        <tr key={index}>
          <td>{item.title}</td>
          <td>
            <span>Director: {item.producer}</span>
          </td>
        </tr>
      ))}
    </>
  );

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
  

 
