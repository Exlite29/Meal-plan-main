import axios from "axios";

export type IsRecipe = {
  id: number;
  name: string;
  image: string;
  video: string;
  ingredients: string[];
  instructions: string[];
};

export const getRecipesQuery = async (): Promise<IsRecipe> => {
  const response = await axios.get("http://localhost:3000/recipes");

  return response.data;
};

console.log(getRecipesQuery);
