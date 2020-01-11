import React from 'react';

import { Button, Paper, TextField, TextareaAutosize, Typography } from '@material-ui/core'
import { key } from '../utils';
import styles from './new-recipe.module.css'

export function NewRecipe() {
  const ingredients = [{ 'name': 'pepper', 'quantity': '1 tsp' }];
  const steps = ["Step 1 blah blah blah"];


  return (
    <div className={styles.main}>
      <Typography variant="h1">Add a Recipe</Typography>
      <Paper className={styles.formWrap}>
        <form autoComplete="off" action="https://mlab.something/something" method="POST">
          <div className={styles.details}>
            <TextField fullWidth label="recipe name" />
            <TextField fullWidth label="image url" />
            <TextField fullWidth label="source" />
          </div>
          <div>
            <Typography variant="h3">Ingredients</Typography>
            {ingredients.map(i => (
              <div className={styles.ingredient} key={key()}>
                <TextField value={i.name} />
                <TextField value={i.quantity} />
              </div>
            ))}
            <div className={styles.ingredient}>
              <TextField label="ingredient" />
              <TextField label="amount" />
            </div>
          </div>
          <div>
            <Typography variant="h3">Instructions</Typography>
            {steps.map(step => (<TextareaAutosize key={key()} defaultValue={step} />)
            )}
            <TextareaAutosize></TextareaAutosize>
          </div>
          <Button color="primary" onClick={() => { }}>Submit</Button>
        </form>
      </Paper>
    </div>
  );
}
