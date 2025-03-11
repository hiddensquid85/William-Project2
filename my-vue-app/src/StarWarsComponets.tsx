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

  export const FilmComponent: React.FC<{ entity: Film }> = ({ entity }) => (
    <div>
      <h1>Film: {entity.title}</h1>
      <p>Director: {entity.director}</p>
      <p>Producer: {entity.producer}</p>
    </div>
  );

 
