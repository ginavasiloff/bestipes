import { string } from "prop-types";

export type IngredientT = { name: string; quantity: string; details?: string };

export type RecipeT = {
  name: string;
  ingredients: IngredientT[];
  instructions: string[];
  source: string | undefined;
  image?: string;
  prepTime?: { total?: string; prep?: string; cook?: string };
  servings?: number;
};

const potPie: RecipeT = {
  name: "Chickless Pot Pie",
  ingredients: [
    { name: "carrots", quantity: "1 cup", details: "thinly sliced" },
    { name: "frozen peas", quantity: "1 cup" },
    { name: "potatoes", quantity: "1 cup", details: "small diced" },
    { name: "celery", quantity: "1/2 cup", details: "thinly sliced" },
    { name: "onion", quantity: "1/3 cup", details: "finely chopped" },
    { name: "butter substitute", quantity: "1/2 cup" },
    { name: "all-purpose flour", quantity: "1/3 cup" },
    { name: "salt", quantity: "1/2 teaspoon" },
    { name: "pepper", quantity: "1/4 teaspoon" },
    { name: "celery seed", quantity: "1/4 teaspoon" },
    { name: "garlic powder", quantity: "1/4 teaspoon" },
    { name: "vegetable broth", quantity: "1 3/4 cup" },
    { name: "plant-based milk", quantity: "2/3 cup" },
    { name: "pie crust", quantity: "2", details: "9 inch" }
  ],
  instructions: [
    "Preheat the oven to 425 degrees F.",
    "In a medium saucepan, combine the carrots, peas, potatoes and celery. Cover with water, bring to a boil and cook until the potatoes are tender, about 15 minutes. Remove from the heat, drain and set aside.",
    "In a large skillet over medium heat, cook the onions in the butter substitute until they are soft and translucent, about 5 minutes. Stir in the flour, salt, pepper, celery seed and garlic powder. Cook for 2 minutes to get the flour taste out. Slowly stir in the broth and then add the milk. Reduce the heat to medium-low and simmer until thick, about 5 minutes. Remove from the heat and stir in the drained vegetables. Roll out one of the unbaked crusts and place in a 9-inch-deep pie plate. Pour the mixture into the bottom crust.",
    "Roll out the second pie crust and place on top. Seal the edges and cut small slits in the top to allow steam to escape. Bake until the pastry is golden brown and the filling is bubbly, 30 to 35 minutes. Cool for 10 minutes before serving."
  ],
  image:
    "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/26/1/YW0104_Chickless-Pot-Pie_s4x3.jpg.rend.hgtvcom.826.620.suffix/1433592001168.jpeg",
  source:
    "https://www.foodnetwork.com/recipes/trisha-yearwood/chickless-pot-pie-recipe-2119520",
  prepTime: {
    total: "1 hour 25 minutes",
    cook: "50 minutes",
    prep: "25 minutes"
  },
  servings: 8
};

const gnocchi: RecipeT = {
  name: "skillet gnocchi with chard and white beans",
  ingredients: [
    { name: "extra virgin olive oil", quantity: "1 tablespoon" },
    { name: "shelf-stable gnocchi", quantity: "1 (16 ounce) package" },
    { name: "extra virgin olive oil", quantity: "1 teaspoon" },
    { name: "yellow onion", quantity: "1 medium", details: "thinly sliced" },
    { name: "garlic", quantity: "4 cloves", details: "minced" },
    { name: "water", quantity: "1/2 cup" },
    { name: "chard leaves", quantity: "6 cups", details: "chopped" },
    { name: "diced tomatoes", quantity: "15 ounce" },
    { name: "white beans", quantity: "15 ounce", details: "rinsed" },
    { name: "pepper", quantity: "1/4 teaspoon", details: "freshly ground" }
  ],
  instructions: [
    "Heat 1 tablespoon oil in a large nonstick skillet over medium heat. Add gnocchi and cook, stirring often, until plumped and starting to brown, 5 to 7 minutes. Transfer to a bowl.",
    "Add the remaining 1 teaspoon oil and onion to the pan and cook, stirring, over medium heat, for 2 minutes. Stir in garlic and water. Cover and cook until the onion is soft, 4 to 6 minutes. Add chard (or spinach) and cook, stirring, until starting to wilt, 1 to 2 minutes. Stir in tomatoes, beans and pepper and bring to a simmer. Stir in the gnocchi. Cover and cook until the sauce is bubbling, about 3 minutes."
  ],
  source:
    "https://www.allrecipes.com/recipe/238785/skillet-gnocchi-with-chard-white-beans/",
  image: "https://images.media-allrecipes.com/userphotos/720x405/5425017.jpg",
  prepTime: { total: "20 minutes" },
  servings: 6
};

const cookies: RecipeT = {
  name: "chewy crispy coconut cookies",
  ingredients: [
    { name: "butter substitute", quantity: "1/2 cup" },
    { name: "brown sugar", quantity: "1/2 cup" },
    { name: "granulated sugar", quantity: "1/2 cup" },
    { name: "egg substitute", quantity: "1" },
    { name: "vanilla extract", quantity: "1 teaspoon" },
    { name: "all-purpose flour", quantity: "1 cup" },
    { name: "Cornflakes cereal", quantity: "1 cup", details: "crushed" },
    { name: "rolled oats", quantity: "1 cup" },
    { name: "baking soda", quantity: "1 teaspoon" },
    { name: "salt", quantity: "1/2 teaspoon" },
    { name: "baking powder", quantity: "1/2 teaspoon" },
    { name: "flaked coconut", quantity: "1 1/3 cup" }
  ],
  instructions: [
    "Preheat oven to 350 degrees F",
    "In a large bowl, cream together the butter substitute, brown sugar and granulated sugar until smooth. Stir in the egg substitute and vanilla. Sift together the flour, baking soda, salt and baking powder; stir into the creamed mixture. Add the oatmeal, crushed cereal and coconut and mix until combined.",
    "Drop dough by teaspoonfuls onto a cookie sheet. Cookies should be about 2 inches apart. Bake for 10 to 12 minutes in the preheated oven. Cookies should be light brown at the edges and on the bottom. Remove from baking sheets to cool on wire racks."
  ],
  source:
    "https://www.allrecipes.com/recipe/15311/chewy-crispy-coconut-cookies/",
  image: "https://images.media-allrecipes.com/userphotos/560x315/364291.jpg"
};

const potstickers: RecipeT = {
  name: "Potstickers",
  source:
    "https://loveisinmytummy.com/2016/10/vegan-potstickers-pan-fried-dumplings-gyoza.html",
  image:
    "https://loveisinmytummy.com/wp-content/uploads/2016/09/Potstickers-3.jpg",
  ingredients: [
    { name: "oil", quantity: "1 teaspoon" },
    { name: "ginger", details: "grated", quantity: "1 tablespoon" },
    { name: "onions", quantity: "1/2 cup", details: "diced" },
    { name: "bell pepper", quantity: "1/4 cup", details: "diced" },
    { name: "cabbage", quantity: "1/2 cup", details: "grated" },
    { name: "soy sauce", quantity: "1 teaspoon" },
    { name: "spring onion", quantity: "1 stalk", details: "finely sliced" },
    { name: "gyoza wrappers", quantity: "1 package" }
  ],
  instructions: [
    "Heat oil in a pan and when warm, add the ginger and fry till fragrant and soft. Maintain the heat at medium-high.",
    "Add the onions and bell pepper and sauté until slightly cooked, but still has it's crunch.",
    "Add the cabbage and carrot and sauté, making sure any water that wilts off the vegetables evaporates quickly.",
    "Season with white pepper, salt and soy sauce.",
    "Once the filling is dry (and not soggy with sauce), remove from heat and let cool completely. Stir in the spring onion.",
    "Place 2 tsp of filling in the center of a gyoza wrapper. Fold over and seal the center by pinching it close. Crimp up the sides and seal tight. Brush water onto the dough if the dough will not seal on its own.",
    "Place on a baking tray lined with wax paper and dusted with flour. Repeat with the remaining filling.",
    "Heat oil in a pan and place the prepared dumplings, taking care to ensure they are not touching each other.",
    "Fry on medium heat until the bottoms turn golden brown.",
    "Pour water into the pan from the sides (not on the dumplings) - there will be splatter, so beware! - cover and let cook on medium-high heat for a minute until the tops turn translucent.",
    "If there is more water, uncover and let it evaporate off. Keep an eye to make sure the bottoms don't burn.",
    "Remove from heat and serve hot!"
  ]
};

export const mockRecipes = [potPie, gnocchi, cookies, potstickers];
