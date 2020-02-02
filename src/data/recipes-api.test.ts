import { getRecipes, postRecipe, validateRecipe } from './recipes-api';
import { mockRecipes } from './recipe-defs';

test('getRecipes gets an array', async () => {
  return getRecipes().then(recipes => {
    expect(Array.isArray(recipes)).toBe(true);
  });
});

test('postRecipe', async () => {
  const recipe = mockRecipes[0];
  postRecipe(recipe).then(r => expect(r).toBe(true));
});

test('validate recipe', () => {
  const recipe = mockRecipes[0];
  expect(validateRecipe(recipe)).toEqual({
    _id: recipe._id,
    name: recipe.name,
    instructions: recipe.instructions,
    image: recipe.image,
    source: recipe.source,
    ingredients: recipe.ingredients
  });
});
