import axiosInstance from "./axiosInstance";
import { Characters, Planets, Starship } from "./commontypes";



export async function fetchCharacters(urls: string[]): Promise<Characters[]> {
    try {
      const characterPromises = urls.map(async (url) => {
        const response = await axiosInstance.get(url);



        return response.data as Characters;
      });
  
      const characters = await Promise.all(characterPromises);

       characters[0].type = "Characters";
      return characters;
    } catch (error) {
      console.error("Error fetching characters:", error);
      return [];
    }
  }

  export async function fetchPlanets(urls: string[]): Promise<Planets[]> {
    try {
      const planetPromises = urls.map(async (url) => {
        const response = await axiosInstance.get(url);



        return response.data as Planets;
      });
  
      const planets = await Promise.all(planetPromises);

      planets[0].type = "Planets";
      return planets;
    } catch (error) {
      console.error("Error fetching planets:", error);
      return [];
    }
  }

  export async function fetchStarships(urls: string[]): Promise<Starship[]> {
    try {
      const StarshipPromises = urls.map(async (url) => {
        const response = await axiosInstance.get(url);



        return response.data as Starship;
      });
  
      const Starship = await Promise.all(StarshipPromises);

       Starship[0].type = "Starship";
      return Starship;
    } catch (error) {
      console.error("Error fetching Starship:", error);
      return [];
    }
  }