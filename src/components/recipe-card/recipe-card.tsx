import * as React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Button,
  Card,
  CardActions,
  CardMedia,
  List,
  ListItem,
  CardContent,
  Collapse,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { RecipeT } from '../../data/recipe-defs';

import styles from './recipe-card.module.css';
import { useState } from 'react';
import { slugify } from '../../utils';

export const RecipeCard = ({ recipe }: { recipe: RecipeT }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const viewRecipe = () => {
    const recipeUrl = `/recipe/${slugify(recipe.name)}`;
    history.push(recipeUrl);
  };
  return (
    <Card>
      <CardMedia className={styles.media} image={recipe.image} />
      <CardContent>{recipe.name}</CardContent>
      <CardActions className={styles.actions}>
        <Button size='small' color='primary' onClick={() => setIsOpen(!isOpen)}>
          Ingredients
          <ArrowDropDownIcon />
        </Button>
        <Button size='small' color='primary' onClick={() => viewRecipe()}>
          Recipe
          <ArrowDropDownIcon />
        </Button>
      </CardActions>
      <Collapse in={isOpen}>
        <CardContent>
          <List>
            {recipe.ingredients.map((i) => (
              <ListItem key={i.name}>{i.name}</ListItem>
            ))}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
};
