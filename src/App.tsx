import * as React from "react";

import { Card } from "@rmwc/card";
import { Grid, GridCell } from "@rmwc/grid";
import { Typography } from "@rmwc/typography";

import { Recipe } from "./recipe";
import { mockRecipe } from "./recipe-defs";

import "material-components-web/dist/material-components-web.min.css";
import "./App.css";

const recipes = [mockRecipe, mockRecipe, mockRecipe];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Typography use="headline3">Recipes</Typography>
        <Grid>
          {recipes.map(r => (
            <GridCell span={4}>
              <Card>{r.name}</Card>
            </GridCell>
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
