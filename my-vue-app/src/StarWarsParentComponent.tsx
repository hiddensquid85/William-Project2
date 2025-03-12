import React from "react";
import { StarWarsEntity, Characters, Film, Planets, Starship } from "./commontypes";
import { CharacterComponent, FilmComponent, PlanetComponent, StarshipComponent } from "./StarWarsComponets";

interface StarWarsParentComponentProps {
  entity: StarWarsEntity;
}

const StarWarsParentComponent: React.FC<StarWarsEntity> = ( entity ) => {
    switch (entity.type) {
      case "Film":
        return <FilmComponent entity={entity.data} />;
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