import axiosInstance from "./axiosInstance";
import { Characters } from "./commontypes";



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