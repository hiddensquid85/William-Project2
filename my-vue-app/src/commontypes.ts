export interface Modeller {
  Name: string
  Model: string
  Manufacturer: string

}

export interface tableProp {
  modeller: Modeller[];

}

export interface BaseEntity {
  id: number;
  name: string;
}

export interface Characters {
  type: "Characters";
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
}

export interface Planets {
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


export interface Film {
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

 export type StarWatsEntity = Characters | Film
