const data_url = "http://localhost:5000/recipes";  // TODO: don't hardcode

export const getRecipes = async (url = data_url) => {
    const recipes = await fetch(url).then(r => r.json());
    return recipes;
}