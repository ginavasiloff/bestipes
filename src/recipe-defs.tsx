import { string } from "prop-types";

export type IngredientT = { name: string; quantity: string; details?: string };

export type RecipeT = {
  name: string;
  ingredients: IngredientT[];
};

export const mockRecipe: RecipeT = {
  name: "Chickless Pot Pie",
  ingredients: [
    { name: "carrots", quantity: "1 cup", details: "thinly sliced" },
    { name: "frozen peas", quantity: "1 cup" },
    { name: "potatoes", quantity: "1 cup", details: "small diced" }
  ]
};
