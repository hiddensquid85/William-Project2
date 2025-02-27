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

export interface Film {
  Title: string;
  Director: string;
}