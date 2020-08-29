import * as React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
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
import styles from './app.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AddRecipeFab } from './components/add-fab';
import { useAuth0 } from './auth0-context';

const App = () => {
  const [recipes, setRecipes] = useState<RecipeT[]>([]);
  const location = useLocation();
  const { isAuthenticated, isLoading, user } = useAuth0();
  const shouldShowAdd = !isLoading && user && location.pathname === '/';
  useEffect(() => {
    getRecipes().then((recipes) => recipes && setRecipes(recipes));
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <main className={styles.main}>
        <Route
          render={() => {
            return (
              <TransitionGroup component={null}>
                <CSSTransition
                  key={location.key}
                  classNames='fade'
                  timeout={300}
                >
                  <div className={styles.view}>
                    <Switch location={location}>
                      <Route
                        exact
                        path='/'
                        component={() =>
                          recipes.length > 0 ? (
                            <>
                              <RecipeGrid recipes={recipes} />
                            </>
                          ) : (
                            <Paper>No Recipes Available</Paper>
                          )
                        }
                      />
                      {isAuthenticated ? (
                        <Route exact path='/recipe/new' component={NewRecipe} />
                      ) : (
                        <Route
                          exact
                          path='/recipe/new'
                          component={() => (
                            <Paper>You must first sign in.</Paper>
                          )}
                        />
                      )}
                      <Route
                        path='/recipe/:name'
                        component={({ match }: { match: MatchT }) => {
                          const recipe = recipes.find(
                            (r) => slugify(r.name) === match.params.name
                          );
                          return recipe ? (
                            <Recipe recipe={recipe} />
                          ) : (
                            <Paper>404</Paper>
                          );
                        }}
                      />
                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
        {shouldShowAdd && <AddRecipeFab className={styles.mainFab} />}
      </main>
    </div>
  );
};

export default App;
