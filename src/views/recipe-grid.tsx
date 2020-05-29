import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { Fab, Grid, makeStyles } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import { RecipeT } from '../data/recipe-defs';
import { useAuth0 } from '../auth0-context';
import { RecipeCard } from '../components/recipe-card/recipe-card';

export const RecipeGrid = ({ recipes }: { recipes: RecipeT[] }) => {
  let history = useHistory();
  const { isLoading, user } = useAuth0();
  const styles = makeStyles({
    grid: {
      padding: '20px',
    },
    fab: {
      position: 'fixed',
      bottom: 20,
      right: 20,
    },
  })();

  const handleClickAdd = () => history.push(`/recipe/new`);

  return (
    <>
      <Grid className={styles.grid} container direction='row' spacing={2}>
        {recipes?.map((recipe: RecipeT) => {
          return (
            <Grid item md={3} xs={12} key={recipe._id}>
              <RecipeCard recipe={recipe} />
            </Grid>
          );
        })}
      </Grid>
      {!isLoading && user && (
        <Fab
          color='primary'
          className={styles.fab}
          onClick={() => handleClickAdd()}
        >
          <AddIcon />
        </Fab>
      )}
    </>
  );
};
