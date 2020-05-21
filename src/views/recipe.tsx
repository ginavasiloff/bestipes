import * as React from 'react';
import {
  List,
  ListItem,
  Paper,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { key } from '../utils';
import { RecipeT } from '../data/recipe-defs';

export const Recipe = ({ recipe }: { recipe: RecipeT }) => {
  const styles = makeStyles({
    main: {
      padding: '20px',
    },
  })();

  return (
    <div className={styles.main}>
      <Paper>
        <Typography>{recipe.name}</Typography>
        <img src={recipe.image} alt={recipe.name} />
        {recipe.prepTime && (
          <span>Total Prep Time: {recipe.prepTime.total}</span>
        )}
        <List key={recipe._id}>
          {recipe.ingredients.map((i) => (
            <ListItem key={key()}>
              <span>{i.name}</span>
              <span>{i.quantity}</span>
              {i.details && <span>{i.details}</span>}
            </ListItem>
          ))}
        </List>
        {/*<List>
          {recipe.instructions.map(i => (<ListItem>{i}</ListItem>))}
        </List> */}
      </Paper>
    </div>
  );
};
