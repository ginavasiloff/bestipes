import { RecipeT } from './recipe-defs';

const data_url = 'http://localhost:5000/recipes'; // TODO: don't hardcode

export const getRecipes = async (url = data_url): Promise<RecipeT[]> => {
  try {
    const res = await fetch(url).then((r) => r.json());
    const recipes = Array.isArray(res)
      ? res.reduce((acc, r) => (r ? [...acc, r] : acc), [])
      : [];
    return recipes;
  } catch (ex) {
    console.error(`Error in getRecipes\n ${ex}`);
    return Promise.resolve([]);
  }
};

export const postRecipe = async (recipe: RecipeT, url = data_url) => {
  const req = {
    method: 'POST',
    data: JSON.stringify(recipe),
  };
  fetch(url, req);
  return true;
};

export const uploadRecipe = async (url: string) => {
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ uploadUrl: url }),
  };
  const res = await fetch(data_url + '/upload', req);
  return res;
};

export const validateRecipe = (obj: Partial<RecipeT>): RecipeT | null => {
  if (!obj.name || !obj.ingredients || !obj.instructions || !obj.image) {
    return null;
  }
  if (!obj.ingredients.every((i) => isValidIngredient(i))) return null;
  return {
    _id: obj._id || Date.now().toString(),
    name: obj.name,
    ingredients: obj.ingredients,
    source: obj.source,
    instructions: obj.instructions,
    image: obj.image,
  };
};

export const isValidIngredient = (obj: any): boolean => {
  const hasRequiredKeys = obj.name && obj.quantity;
  const hasOnlyValidKeys = Object.keys(obj).every(
    (k) => k === 'name' || k === 'quantity' || k === 'details'
  );
  const hasApprovedValues = Object.keys(obj).every(
    (k) => typeof obj[k] === 'string' && obj[k].trim() !== ''
  );
  return hasRequiredKeys && hasOnlyValidKeys && hasApprovedValues;
};
