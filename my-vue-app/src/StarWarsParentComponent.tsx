import React from "react";
import { StarWarsEntity, Characters, Film, Planets, Starship } from "./commontypes";
import { CharacterComponent, FilmComponent, PlanetComponent, StarshipComponent } from "./StarWarsComponets";

interface StarWarsParentComponentProps {
  entity: StarWarsEntity;
}

const StarWarsParentComponent: React.FC<StarWarsParentComponentProps> = ({ entity }) => {

  if (entity.length === 0) {
    return null;
  }
  const entityType = entity[0].type;

    switch (entityType) {
      case "Film":
        return <FilmComponent entity={entity as Film[]} />;
     /*  case "Starship":s
        return <StarshipComponent entity={entity} />;
      case "Planets":
        return <PlanetComponent entity={entity} />;
      case "Characters":
        return <CharacterComponent entity={entity} />; */
      default:
        return <div>Unknown entity type</div>;
    }
  };

export default StarWarsParentComponent;