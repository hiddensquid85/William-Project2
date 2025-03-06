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
  Name: string
  System: string;
}

/* export interface Film {
  Title: string;
  Director: string;
} */

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