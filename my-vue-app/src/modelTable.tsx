import React, { useEffect } from "react";
import './modelTable.css';
import { Characters, Film, Modeller, Planets } from "./commontypes";
import { useDispatch, useSelector } from 'react-redux';
import {  setSelectedStarWars, setSelectedFilm, setCharacters, setPlanets} from './starshipSlice';
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
  return (item as Planets).rotation_period !== undefined;
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

async function fetchPlanets(Planets:string[]): Promise<Planets[]> {
  try {
    const PlanetsPromises = Planets.map(url =>
      axiosInstance.get(url).then(response => ({
        Name: response.data.name,
        System: response.data.climate, // Map climate to System
        diameter: response.data.diameter,
        rotation_period: response.data.rotation_period,
        orbital_period: response.data.orbital_period,
        gravity: response.data.gravity,
        population: response.data.population,
        climate: response.data.climate,
        terrain: response.data.terrain,
        surface_water: response.data.surface_water,
        residents: response.data.residents,
        films: response.data.films,
        url: response.data.url,
        created: response.data.created,
        edited: response.data.edited,
          }))
    );
    const planets = await Promise.all(PlanetsPromises);
    return planets;
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

      const data2 = selectedStarWars?.planets ? await fetchPlanets(selectedStarWars.planets) : [];
      dispatch(setPlanets(data2));

      
    }
  };

  fetchData();
}, [selectedStarWars, dispatch]);





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
                  <span>{item.climate}</span>
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
