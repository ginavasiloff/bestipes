import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Grid, GridCell } from "@rmwc/grid";
import { Typography } from "@rmwc/typography";

import { RecipeCard } from "./recipe-card";
import { mockRecipes } from "./recipe-defs";

import "material-components-web/dist/material-components-web.min.css";
import "./App.css";

const recipes = mockRecipes;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route
            exact
            path="/"
            component={() => {
              return (
                <React.Fragment>
                  <Typography use="headline3">Recipes</Typography>
                  <Grid>
                    {recipes.map(r => (
                      <GridCell span={4}>
                        <RecipeCard recipe={r} />
                      </GridCell>
                    ))}
                  </Grid>
                </React.Fragment>
              );
            }}
          />
        </Router>
      </div>
    );
  }
}

export default App;
