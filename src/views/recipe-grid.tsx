import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Button, Card, CardActions, CardContent, CardMedia, Collapse, Fab, Grid, List, ListItem, makeStyles } from "@material-ui/core";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AddIcon from '@material-ui/icons/Add';
import { RecipeT } from "../recipe-defs";
import { key, slugify } from "../utils";


export const RecipeGrid = ({
  recipes
}: {
  recipes: RecipeT[];
}) => {
  let history = useHistory();

  const styles = makeStyles({
    grid: {
      padding: "20px"
    },
    media: {
      height: 200,
    },
    actions: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    fab: {
      position: 'fixed',
      bottom: 20,
      right: 20
    }
  })();

  const [expandedElements, setExpandedElements] = useState<string[]>([]);

  const handleToggleIngredients = (id: string) => expandedElements.includes(id) ?
    setExpandedElements(expandedElements.filter(i => i !== id)) :
    setExpandedElements([...expandedElements, id])


  const handleRecipeClick = (name: string) => history.push(`/recipe/${slugify(name)}`);


  const handleClickAdd = () => history.push(`/recipe/new`);

  return (
    <>
      <Grid className={styles.grid} container direction="row" spacing={2}>
        {recipes.map((recipe: RecipeT) => {
          const { id, image, name } = { ...recipe };
          return (
            <Grid item md={3} xs={12} key={id}>
              <Card>
                <CardMedia
                  className={styles.media}
                  image={image}
                />
                <CardContent>
                  {name}
                </CardContent>
                <CardActions className={styles.actions}>
                  <Button size="small" color="primary" onClick={() => handleToggleIngredients(id)}>
                    Ingredients<ArrowDropDownIcon />
                  </Button>
                  <Button size="small" color="primary" onClick={() => handleRecipeClick(name)}>
                    Recipe
              </Button>
                </CardActions>
                <Collapse in={expandedElements.includes(id)}>
                  <CardContent>
                    <List>
                      {recipe.ingredients.map(i => (<ListItem key={key()}>{i.name}</ListItem>))}
                    </List>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Fab color="primary" className={styles.fab} onClick={() => handleClickAdd()}><AddIcon /></Fab>
    </>
  );
};