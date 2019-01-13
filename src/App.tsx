import * as React from "react";

import {
  Card,
  CardAction,
  CardActions,
  CardActionButtons,
  CardMedia,
  CardMediaContent
} from "@rmwc/card";
import { Grid, GridCell } from "@rmwc/grid";
import { Typography } from "@rmwc/typography";

import { Recipe } from "./recipe";
import { mockRecipes } from "./recipe-defs";

import "material-components-web/dist/material-components-web.min.css";
import "./App.css";

const recipes = mockRecipes;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Typography use="headline3">Recipes</Typography>
        <Grid>
          {recipes.map(r => (
            <GridCell span={4}>
              <Card>
                <CardMedia
                  sixteenByNine
                  style={{ backgroundImage: `url(${r.image})` }}
                >
                  <CardMediaContent>
                    <Typography
                      use="headline4"
                      theme="text-primary-on-dark"
                      style={{
                        padding: "0.5rem 1rem",
                        backgroundImage:
                          "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.55) 75%)",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        position: "absolute",
                        textTransform: "capitalize",
                        textAlign: "left"
                      }}
                    >
                      {r.name}
                    </Typography>
                  </CardMediaContent>
                </CardMedia>
                <CardActions>
                  <CardActionButtons>
                    <CardAction>ingredients</CardAction>
                    <CardAction>full recipe</CardAction>
                  </CardActionButtons>
                </CardActions>
              </Card>
            </GridCell>
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
