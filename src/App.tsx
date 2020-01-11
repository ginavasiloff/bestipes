import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { RecipeGrid } from './views/recipe-grid';
import { Recipe } from './views/recipe';
import { NewRecipe } from './views/new-recipe';
import { RecipeT } from './recipe-defs';
import { getRecipes } from './api/recipes-api'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core'

import { MatchT } from './app-defs';

import './App.css';
import { slugify } from './utils';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#ffffff'
    }
  },
  typography: {
    fontSize: 12,
    h1: {
      fontSize: '2rem'
    },
    h3: {
      fontSize: '1.25rem'
    }
  },
});



class App extends React.Component {
  state = { recipes: [] };

  componentDidMount() {
    getRecipes().then(recipes => this.setState({ recipes }));
  }

  render() {
    const recipes: RecipeT[] = this.state.recipes;
    return (
      <div className='App'>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route
                exact
                path='/'
                component={() => (
                  <RecipeGrid recipes={recipes} />
                )}
              />
              <Route
                exact
                path='/recipe/new'
                component={() => <NewRecipe />}
              />
              <Route
                path='/recipe/:name'
                component={({ match }: { match: MatchT }) => {
                  const recipe = recipes.find(r => slugify(r.name) === match.params.name);
                  return (recipe ?
                    <Recipe recipe={recipe} />
                    : <Paper>404</Paper>)
                }}
              />
            </Switch>
          </Router>
        </ThemeProvider >
      </div >
    );
  }
}

export default App;
