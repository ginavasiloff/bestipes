import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Paper } from '@material-ui/core';

import { Navbar } from './components/navbar';
import { RecipeGrid } from './views/recipe-grid';
import { Recipe } from './views/recipe';
import { NewRecipe } from './views/new-recipe';
import { RecipeT } from './data/recipe-defs';
import { MatchT } from './app-defs';
import { slugify } from './utils';
import { useState, useEffect } from 'react';
import { getRecipes } from './data/recipes-api';

const App = () => {
  const [recipes, setRecipes] = useState<RecipeT[]>([]);
  useEffect(() => {
    getRecipes().then((recipes) => setRecipes(recipes));
  }, []);
  if (!Array.isArray(recipes)) {
    return <h3>no recipes</h3>;
  }
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route
          exact
          path='/'
          component={() => <RecipeGrid recipes={recipes} />}
        />
        <Route exact path='/recipe/new' component={() => <NewRecipe />} />
        <Route
          path='/recipe/:name'
          component={({ match }: { match: MatchT }) => {
            const recipe = recipes.find(
              (r) => slugify(r.name) === match.params.name
            );
            return recipe ? <Recipe recipe={recipe} /> : <Paper>404</Paper>;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
