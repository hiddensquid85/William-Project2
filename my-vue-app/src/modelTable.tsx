import React, { useEffect } from "react";
import './modelTable.css';
import { Characters, Film, Modeller, Planets } from "./commontypes";
import { useDispatch, useSelector } from 'react-redux';
import {  setSelectedStarWars, setSelectedFilm, setCharacters} from './starshipSlice';
import { RootState } from './store';
import axiosInstance from "./axiosInstance";

interface ModelTableProp {
  modeller: (Modeller | Planets | Characters | Film)[];
}

// Type guards
function isModeller(item: any): item is Modeller {
  return (item as Modeller).Model !== undefined;
}

function isPlanets(item: any): item is Planets {
  return (item as Planets).System !== undefined;
}

function isCharacters(item: any): item is Characters {
  return (item as Characters).Age !== undefined;
}

function isFilm(item: any): item is Film {
  return (item as Film).producer !== undefined;
}

const ModelTable: React.FC<ModelTableProp> = ({ modeller }) => {
  const dispatch = useDispatch();
  const selectedStarWars = useSelector((state: RootState) => state.starship.selectedStarWars);

 // const selectedfilm = useSelector((state: RootState) => state.starship.selectedFilm);

/*   var selectedStarship2=isModeller(selectedStarship); */

/* if (isModeller(selectedStarship))
  selectedStarship as Modeller; 
else if (isPlanets(selectedStarship))
  selectedStarship as Planets;
else if (isCharacters(selectedStarship))
  selectedStarship as Characters;
else if (isFilm(selectedStarship))
  selectedStarship as Film;

 */
async function fetchCharacters(Characters:string[]): Promise<Characters[]> {
  try {


    const characterPromises = Characters.map(url =>
      axiosInstance.get(url).then(response => ({
        Name: response.data.name,
        Age: response.data.birth_year,
        LightSaber: response.data.skin_color,
      }))
    );
    const characters = await Promise.all(characterPromises);
    return characters;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
}



useEffect(() => {
  const fetchData = async () => {
    if (selectedStarWars && isFilm(selectedStarWars)) {

      const data = selectedStarWars?.characters ? await fetchCharacters(selectedStarWars.characters) : [];
      dispatch(setCharacters(data));
    }
  };

  fetchData();
}, [selectedStarWars]);





  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name/Title</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {modeller.map((item, index) => {
          if (isModeller(item)) {
            return (
              <tr
                key={index}
                onClick={() => dispatch(setSelectedStarWars(item))}
              /*   className={selectedStarship && selectedStarship.Name === item.Name ? "highlighted" : ""} */
              >
                <td>{item.Name}</td>
                <td>
                  <span>Model: {item.Model}</span>
                  <span>Manufacturer: {item.Manufacturer}</span>
                </td>
              </tr>
            );
          } else if (isPlanets(item)) {
            return (
              <tr
                key={index}
                onClick={() => dispatch(setSelectedStarWars(item))}
                className={selectedStarWars && isPlanets(selectedStarWars) && selectedStarWars.Name === item.Name ? "highlighted" : ""}

              >
                <td>{item.Name}</td>
                <td>
                  <span>System: {item.System}</span>
                </td>
              </tr>
            );
          } else if (isCharacters(item)) {
            return (
              <tr
                key={index}
                onClick={() => dispatch(setSelectedStarWars(item))}
              /*    className={selectedStarship && selectedStarship.Name === item.Name ? "highlighted" : ""}  */
              >
                <td>{item.Name}</td>
                <td>
                  <span>Age: {item.Age}</span>
                  <span>LightSaber: {item.LightSaber}</span>
                </td>
              </tr>
            );
          } else if (isFilm(item)) {
          /*   const setSelectedFilm = (item: Film) => setSelectedStarWars(item); */

            return (
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
            return null;
          }
        })}
      </tbody>
    </table>
  );
};

export default ModelTable;

function setProgress(arg0: number) {
 // throw new Error("Function not implemented.");
}
