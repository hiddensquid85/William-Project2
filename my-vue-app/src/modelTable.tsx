import React, { useEffect } from "react";
import './modelTable.css';
import { Characters, Film, Modeller, Planets } from "./commontypes";
import { useDispatch, useSelector } from 'react-redux';
import {  setSelectedStarWars, setSelectedFilm, setCharacters, setPlanets, setFilms} from './starshipSlice';
import { RootState } from './store';
import axiosInstance from "./axiosInstance";

interface ModelTableProp {
  modeller: (Modeller | Planets | Characters | Film)[];
}




  

/* useEffect(() => {
  const fetchData = async () => {
    if (selectedStarWars && isFilm(selectedStarWars)) {

      const data = selectedStarWars?.characters ? await fetchCharacters(selectedStarWars.characters) : [];
      dispatch(setCharacters(data));

      const data2 = selectedStarWars?.planets ? await fetchPlanets(selectedStarWars.planets) : [];
      dispatch(setPlanets(data2));

    
      
    }
  };

  fetchData();
}, [selectedStarWars, dispatch]); */





  /* return (
    <table className="table">
      <thead>
        <tr>
          <th>Name/Title</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {modeller.map((item, index) => {
         
        if (isFilm(item)) {
          /*   const setSelectedFilm = (item: Film) => setSelectedStarWars(item); */

//             return (
//               <tr
//                 key={index}
//                 onClick={() => dispatch(setSelectedStarWars(item))}
//                 className={selectedStarWars && isFilm(selectedStarWars) && selectedStarWars.title === item.title ? "highlighted" : ""}

//               >
//                 <td>{item.title}</td>
//                 <td>
//                   <span>Director: {item.producer}</span>
//                 </td>
//               </tr>
//             );
//           } else {
//             return null;
//           }
//         })}
//       </tbody>
//     </table>
//   );
// }; */




