import * as React from "react";

import { Grid, GridCell } from "@rmwc/grid";
import { Typography } from "@rmwc/typography";

import { RecipeT } from "../recipe-defs";
import { MatchT } from "../app-defs";
import { RecipeCard } from "../components/recipe-card";

export const RecipeGrid = ({
  match,
  recipes
}: {
  match: MatchT;
  recipes: RecipeT[];
}) => {
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
};
