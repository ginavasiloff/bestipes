import {
  getRecipes,
  // postRecipe,
  isValidIngredient,
  validateRecipe,
} from './recipes-api';
import { mockRecipes } from './recipe-defs';

test('getRecipes gets an array', async () => {
  return getRecipes().then((recipes) => {
    expect(Array.isArray(recipes)).toBe(true);
  });
});

// TODO: make better integration test
// test('postRecipe', async () => {
//   const recipe = mockRecipes[0];
//   postRecipe(recipe).then(r => expect(r).toBe(true));
// });

test('validate recipe', () => {
  const recipe = mockRecipes[0];
  expect(validateRecipe(recipe)).toEqual({
    _id: recipe._id,
    name: recipe.name,
    instructions: recipe.instructions,
    image: recipe.image,
    source: recipe.source,
    ingredients: recipe.ingredients,
  });
});

describe(isValidIngredient, () => {
  it('ensures an ingredient has only a name, quantity, and optional details', () => {
    expect(
      isValidIngredient({
        name: 'sugar',
        quantity: '1/2 cup',
        inValidKey: true,
      })
    ).toBe(false);
    expect(
      isValidIngredient({
        name: 'sugar',
        quantity: '1/2 cup',
      })
    ).toBe(true);
    expect(
      isValidIngredient({
        name: 'sugar',
        quantity: '1 cup',
        details: 'unbleached is preferred',
      })
    ).toBe(true);
  });

  it('ensures all properties are strings', () => {
    expect(
      isValidIngredient({ name: 1, quantity: 'string', details: 'string' })
    ).toBe(false);
    expect(
      isValidIngredient({ name: 'string', quantity: 1, details: 'string' })
    ).toBe(false);
    expect(
      isValidIngredient({ name: 'string', quantity: 'string', details: 1 })
    ).toBe(false);
  });

  it('ensures no properties are empty', () => {
    expect(
      isValidIngredient({
        name: 'sugar',
        quantity: ' ',
      })
    ).toBe(false);
  });
});
