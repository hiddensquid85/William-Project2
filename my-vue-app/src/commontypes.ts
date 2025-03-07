export interface Modeller {
  Name: string
  Model: string
  Manufacturer: string

}

export interface tableProp {
  modeller: Modeller[];

}

export interface Characters {
  Name: string;
  Age: number;
  LightSaber: string;
}

export interface Planets {
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