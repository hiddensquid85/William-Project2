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
   /* case "Starship":
      return <StarshipComponent entity={entity as Starship} />; */
  /*  case "Planets":
      return <PlanetComponent entity={entity as Planets} />; */
    case "Characters":
      return <CharacterComponent entity={entity as Characters[]} />;
    default:
      return <div>Unknown entity type</div>;
  }
  };

export default StarWarsParentComponent;