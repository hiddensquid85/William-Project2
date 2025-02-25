export interface Modeller {
  Name: string
  Model: string
  Manufacturer: string

}

export interface tableProp {
  modeller: Modeller[];

}