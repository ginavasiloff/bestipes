export type IngredientT = { name: string; quantity: string; details?: string };

export type RecipeT = {
  _id: string;
  name: string;
  ingredients: IngredientT[];
  instructions: string[];
  source: string | undefined;
  image: string;
  prepTime?: { total?: string; prep?: string; cook?: string };
  servings?: number;
};

const potPie: RecipeT = {
  name: 'Chickless Pot Pie',
  _id: '1234',
  ingredients: [
    { name: 'carrots', quantity: '1 cup', details: 'thinly sliced' },
    { name: 'frozen peas', quantity: '1 cup' },
    { name: 'potatoes', quantity: '1 cup', details: 'small diced' },
    { name: 'celery', quantity: '1/2 cup', details: 'thinly sliced' },
    { name: 'onion', quantity: '1/3 cup', details: 'finely chopped' },
    { name: 'butter substitute', quantity: '1/2 cup' },
    { name: 'all-purpose flour', quantity: '1/3 cup' },
    { name: 'salt', quantity: '1/2 teaspoon' },
    { name: 'pepper', quantity: '1/4 teaspoon' },
    { name: 'celery seed', quantity: '1/4 teaspoon' },
    { name: 'garlic powder', quantity: '1/4 teaspoon' },
    { name: 'vegetable broth', quantity: '1 3/4 cup' },
    { name: 'plant-based milk', quantity: '2/3 cup' },
    { name: 'pie crust', quantity: '2', details: '9 inch' },
  ],
  instructions: [
    'Preheat the oven to 425 degrees F.',
    'In a medium saucepan, combine the carrots, peas, potatoes and celery. Cover with water, bring to a boil and cook until the potatoes are tender, about 15 minutes. Remove from the heat, drain and set aside.',
    'In a large skillet over medium heat, cook the onions in the butter substitute until they are soft and translucent, about 5 minutes. Stir in the flour, salt, pepper, celery seed and garlic powder. Cook for 2 minutes to get the flour taste out. Slowly stir in the broth and then add the milk. Reduce the heat to medium-low and simmer until thick, about 5 minutes. Remove from the heat and stir in the drained vegetables. Roll out one of the unbaked crusts and place in a 9-inch-deep pie plate. Pour the mixture into the bottom crust.',
    'Roll out the second pie crust and place on top. Seal the edges and cut small slits in the top to allow steam to escape. Bake until the pastry is golden brown and the filling is bubbly, 30 to 35 minutes. Cool for 10 minutes before serving.',
  ],
  image:
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/26/1/YW0104_Chickless-Pot-Pie_s4x3.jpg.rend.hgtvcom.826.620.suffix/1433592001168.jpeg',
  source:
    'https://www.foodnetwork.com/recipes/trisha-yearwood/chickless-pot-pie-recipe-2119520',
  prepTime: {
    total: '1 hour 25 minutes',
    cook: '50 minutes',
    prep: '25 minutes',
  },
  servings: 8,
};

export const mockRecipes = [potPie];
