import React from "react";
import { StarWarsEntity, Characters, Film, Planets, Starship } from "./commontypes";
import { CharacterComponent, FilmComponent, PlanetComponent, StarshipComponent } from "./StarWarsComponets";


const StarWarsComponent: React.FC<{ entity: StarWarsEntity }> = ({ entity }) => {
    switch (entity.type) {
      case "Starship":
        return <StarshipComponent entity={entity} />;
      case "Planets":
        return <PlanetComponent entity={entity} />;
      case "Characters":
        return <CharacterComponent entity={entity} />;
      default:
        return <div>Unknown entity type</div>;
    }
  };