import * as React from 'react';
import { Grid } from '@material-ui/core';

import { RecipeT } from '../data/recipe-defs';
import { RecipeCard } from '../components/recipe-card/recipe-card';

export const RecipeGrid = ({ recipes }: { recipes: RecipeT[] }) => {
  return (
    <>
      <Grid container direction='row' spacing={2}>
        {recipes?.map((recipe: RecipeT) => {
          return (
            <Grid item md={3} xs={12} key={recipe._id}>
              <RecipeCard recipe={recipe} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
