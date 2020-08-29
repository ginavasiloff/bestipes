import React, { FormEvent, useState } from 'react';

import {
  Button,
  IconButton,
  Paper,
  TextField,
  TextareaAutosize,
  Typography,
  Box,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './new-recipe.module.css';
import { IngredientT, RecipeT } from '../../data/recipe-defs';
import {
  postRecipe,
  validateRecipe,
  uploadRecipe,
} from '../../data/recipes-api';

export const NewRecipe = () => {
  const newRecipe: RecipeT = {
    _id: '',
    name: '',
    source: '',
    image: '',
    ingredients: [],
    instructions: [],
  };

  const newIngredient = {
    name: '',
    quantity: '',
  };

  const [recipe, setRecipe] = useState(newRecipe);
  const [uploadUrl, setUploadUrl] = useState(recipe.source);

  const handleUpdateRecipe = (key: string, value: any) => {
    setRecipe({ ...recipe, [key]: value });
  };

  const handleUpdateIngredient = (idx: number, ingredient: IngredientT) => {
    const ingredients = [
      ...recipe.ingredients.slice(0, idx),
      ingredient,
      ...recipe.ingredients.slice(idx + 1),
    ];
    setRecipe({ ...recipe, ingredients });
  };

  const handleDeleteIngredient = (idx: number) => {
    const ingredients = [
      ...recipe.ingredients.slice(0, idx),
      ...recipe.ingredients.slice(idx + 1),
    ];
    setRecipe({ ...recipe, ingredients });
  };

  const handleUpdateInstructions = (instruction: string, idx: number) => {
    const instructions = [
      ...recipe.instructions.slice(0, idx),
      instruction,
      ...recipe.instructions.slice(idx + 1),
    ];
    setRecipe({ ...recipe, instructions });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const valid = validateRecipe(recipe);
    !!valid && postRecipe(valid);
  };

  const onKeyPress = async (e: any) => {
    if (e.key === 'Enter' && uploadUrl) {
      const res = await uploadRecipe(uploadUrl);
      const recipe = await res.json();
      handleUpdateRecipe('name', recipe.name);
      console.log(recipe);
    }
  };
  return (
    <>
      <Typography variant='h1'>Add a Recipe</Typography>
      <Paper className={styles.formWrap}>
        <TextField
          fullWidth
          label='Upload url'
          value={uploadUrl}
          onChange={(e) => setUploadUrl(e.target.value)}
          onKeyPress={(e) => onKeyPress(e)}
        />
        <form autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
          <Box component='div' className={styles.details}>
            <TextField
              fullWidth
              label='Recipe Name'
              onChange={(e) => handleUpdateRecipe('name', e.target.value)}
              value={recipe.name}
            />
            <TextField
              fullWidth
              label='image url'
              onChange={(e) => handleUpdateRecipe('image', e.target.value)}
            />
            <TextField
              fullWidth
              label='source'
              onChange={(e) => handleUpdateRecipe('source', e.target.value)}
            />
          </Box>
          <Box component='div'>
            <Typography variant='h3'>
              Ingredients{' '}
              <IconButton
                size='small'
                color='primary'
                onClick={() => {
                  handleUpdateRecipe('ingredients', [
                    ...recipe.ingredients,
                    newIngredient,
                  ]);
                }}
              >
                <AddIcon />
              </IconButton>
            </Typography>
            {recipe.ingredients.map((i, idx) => (
              <Box component='span' className={styles.ingredient}>
                <TextField
                  label='ingredient'
                  value={i.name}
                  onChange={(e) =>
                    handleUpdateIngredient(idx, {
                      ...i,
                      name: e.target.value,
                    })
                  }
                />
                <TextField
                  label='amount'
                  value={i.quantity}
                  onChange={(e) =>
                    handleUpdateIngredient(idx, {
                      ...i,
                      quantity: e.target.value,
                    })
                  }
                />
                <IconButton
                  size='small'
                  color='primary'
                  onClick={() => {
                    handleDeleteIngredient(idx);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
          </Box>
          <Box component='div'>
            <Typography variant='h3'>
              Instructions{' '}
              <IconButton
                size='small'
                color='primary'
                onClick={() => {
                  handleUpdateRecipe('instructions', [
                    ...recipe.instructions,
                    '',
                  ]);
                }}
              >
                <AddIcon />
              </IconButton>
            </Typography>
            {recipe.instructions.map((step: string, idx: number) => (
              <TextareaAutosize
                key={idx}
                value={step}
                onChange={(e) => handleUpdateInstructions(e.target.value, idx)}
              />
            ))}
          </Box>
          <Button type='submit' color='primary'>
            Submit
          </Button>
        </form>
      </Paper>
    </>
  );
};
