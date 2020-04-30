import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { RecipeGrid } from './views/recipe-grid';
import { Recipe } from './views/recipe';
import { NewRecipe } from './views/new-recipe';
import { RecipeT } from './data/recipe-defs';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import { MatchT } from './app-defs';

import './App.css';
import { slugify } from './utils';
import { useAuth0 } from './auth0-context';
import { useState, useEffect } from 'react';
import { getRecipes } from './data/recipes-api';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontSize: 12,
    h1: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.25rem',
    },
  },
});

const App = () => {
  const {
    isLoading,
    // user,
    // loginWithRedirect,
    // logout,
    // isAuthenticated,
  } = useAuth0();

  const [recipes, setRecipes] = useState<RecipeT[]>([]);

  useEffect(() => {
    getRecipes().then((recipes) => setRecipes(recipes));
  }, []);

  // if (!isAuthenticated) {
  //   loginWithRedirect();
  // }
  if (isLoading) {
    return <h3>loading</h3>;
  }
  if (!Array.isArray(recipes)) {
    return <h3>no recipes</h3>;
  }
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Router>
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
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
