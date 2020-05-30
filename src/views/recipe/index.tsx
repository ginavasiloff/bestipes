import * as React from 'react';
import { List, ListItem, Typography, Paper, Box } from '@material-ui/core';
import { key } from '../../utils';
import { RecipeT } from '../../data/recipe-defs';
import styles from './recipe.module.css';

export const Recipe = ({ recipe }: { recipe: RecipeT }) => {
  return (
    <Paper className={styles.recipe}>
      <Typography variant='h2' component='h2'>
        {recipe.name}
      </Typography>
      <Box component='div' className={styles.contents}>
        <Box component='span'>
          <Box component='span' className={styles.image}>
            <img src={recipe.image} alt={recipe.name} />
          </Box>
          {/* {recipe.prepTime && (
            <span>Total Prep Time: {recipe.prepTime.total}</span>
          )} */}
        </Box>
        <Box component='span' className={styles.ingredients}>
          <Typography variant='h4' component='h4'>
            Ingredients
          </Typography>
          <List>
            {recipe.ingredients.map((i) => (
              <ListItem key={key()}>
                <span>{i.name}</span>
                <span>{i.quantity}</span>
                {i.details && <span>{i.details}</span>}
              </ListItem>
            ))}
          </List>
        </Box>
        <Box component='span' className={styles.instructions}>
          <Typography variant='h4' component='h4'>
            Instructions
          </Typography>
          <List>
            {recipe.instructions.map((i) => (
              <ListItem key={key()}>
                <p>{i}</p>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Paper>
  );
};
