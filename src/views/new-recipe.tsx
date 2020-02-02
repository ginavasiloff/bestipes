import React, { FormEvent, useState } from 'react';

import {
  Button,
  IconButton,
  Paper,
  TextField,
  TextareaAutosize,
  Typography
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { key } from '../utils';
import styles from './new-recipe.module.css';
import { IngredientT, RecipeT } from '../data/recipe-defs';
import { postRecipe, validateRecipe } from '../data/recipes-api';

export function NewRecipe() {
  const newRecipe: Partial<RecipeT> = {
    name: undefined,
    source: undefined,
    image: undefined,
    ingredients: [],
    instructions: []
  };
  const [recipe, setRecipe] = useState(newRecipe);

  const handleUpdateRecipe = (key: string, value: any) => {
    setRecipe({ ...recipe, [key]: value });
  };

  const handleUpdateInstructions = (instruction: string, idx: number) => {
    const instructions = recipe.instructions ?? [];
    instructions.length >= idx
      ? handleUpdateRecipe('instructions', [
          ...instructions.slice(0, idx),
          instruction,
          ...instructions.slice(idx + 1)
        ])
      : handleUpdateRecipe('instructions', [...instructions, instruction]);
  };

  const handleUpdateIngredient = (ingredient: IngredientT) => {
    const ingredients = recipe.ingredients ?? [];
    const idx = ingredients.findIndex(i => i.name === ingredient.name);
    const updated =
      idx >= 0
        ? [
            ...ingredients.slice(0, idx),
            ingredient,
            ...ingredients.slice(idx + 1)
          ]
        : [...ingredients, ingredient];

    handleUpdateRecipe('ingredients', updated);
  };

  const handleChangeIngredientName = (oldName: string, newName: string) => {
    const ingredients = recipe.ingredients ?? [];
    const idx = ingredients.findIndex(i => i.name === oldName);
    const ingredient = { ...ingredients[idx], name: newName };
    const updated =
      idx >= 0
        ? [
            ...ingredients.slice(0, idx),
            ingredient,
            ...ingredients.slice(idx + 1)
          ]
        : [...ingredients, ingredient];

    handleUpdateRecipe('ingredients', updated);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const valid = validateRecipe(recipe);
    !!valid && postRecipe(valid);
  };

  return (
    <div className={styles.main}>
      <Typography variant='h1'>Add a Recipe</Typography>
      <Paper className={styles.formWrap}>
        <form autoComplete='off' onSubmit={e => handleSubmit(e)}>
          <div className={styles.details}>
            <TextField
              fullWidth
              label='Recipe Name'
              onChange={e => handleUpdateRecipe('name', e.target.value)}
            />
            <TextField
              fullWidth
              label='image url'
              onChange={e => handleUpdateRecipe('image', e.target.value)}
            />
            <TextField
              fullWidth
              label='source'
              onChange={e => handleUpdateRecipe('source', e.target.value)}
            />
          </div>
          <div>
            <Typography variant='h3'>
              Ingredients{' '}
              <IconButton size='small' color='primary'>
                <AddIcon />
              </IconButton>
            </Typography>
            {recipe?.ingredients?.map(
              (i: { name: string; quantity: string }) => (
                <div className={styles.ingredient} key={key()}>
                  <TextField
                    onChange={e =>
                      handleChangeIngredientName(i.name, e.target.value)
                    }
                  />
                  <TextField
                    onChange={e =>
                      handleUpdateIngredient({
                        ...i,
                        quantity: e.target.value
                      })
                    }
                  />
                </div>
              )
            )}
            <div className={styles.ingredient}>
              <TextField label='ingredient' />
              <TextField label='amount' />
            </div>
          </div>
          <div>
            <Typography variant='h3'>Instructions</Typography>
            {recipe?.instructions?.map((step: string, idx: number) => (
              <TextareaAutosize
                key={key()}
                defaultValue={step}
                onChange={e => handleUpdateInstructions(e.target.value, idx)}
              />
            ))}
            <TextareaAutosize></TextareaAutosize>
          </div>
          <Button type='submit' color='primary'>
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
}
