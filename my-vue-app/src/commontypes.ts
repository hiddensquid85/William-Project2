export interface Modeller {
  Name: string
  Model: string
  Manufacturer: string

}

export interface tableProp {
  modeller: Modeller[];

}

export interface BaseEntity {
    type: "Characters" | "Film" | "Planets" | "Starship";

}

export interface Characters extends BaseEntity{
  type: "Characters";
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Planets extends BaseEntity {
  type: "Planets";
  Name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
}


export interface Film extends BaseEntity{
  film: any;
  type: "Film";
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Starship extends BaseEntity {
  type: "Starship"
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}
/* type EntityProps = {
  entity: { type: "Film" | "Characters" | "Planets" | "Starship"; films?: Film[] };
}; */

export type StarWarsEntity<T> = { type: "Film" | "Characters" | "Planets" | "Starship"; data: T[] };
