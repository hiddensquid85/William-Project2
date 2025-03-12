import React from "react";
import { StarWarsEntity, Characters, Film, Planets, Starship } from "./commontypes";
import { CharacterComponent, FilmComponent, PlanetComponent, StarshipComponent } from "./StarWarsComponets";

interface StarWarsParentComponentProps<T> {
  entity: StarWarsEntity<T>;
}

const StarWarsParentComponent = <T extends Film | Characters | Planets | Starship>({ entity }: StarWarsParentComponentProps<T>) => {
    switch (entity.type) {
      case "Film":
        return <FilmComponent entity={entity.data as Film[]} />;
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