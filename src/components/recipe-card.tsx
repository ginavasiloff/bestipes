import * as React from "react";

import { Link } from "react-router-dom";
import { Card, CardActions, CardActionArea, CardMedia, List, ListItem } from "@material-ui/core";

import { RecipeT } from "../recipe-defs";

import { slugify } from "../utils";

type OwnPropsT = {
  recipe: RecipeT;
};

type OwnStateT = {
  isShowingIngredients: boolean;
};

export class RecipeCard extends React.Component<OwnPropsT, OwnStateT> {
  constructor(props: OwnPropsT) {
    super(props);
    this.state = { isShowingIngredients: false };
  }

  render() {
    const recipe = this.props.recipe;
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            style={{ backgroundImage: `url(${recipe.image})` }}
          >
            {recipe.name}
          </CardMedia>
        </CardActionArea>
        {this.state.isShowingIngredients && (
          <div>
            Ingredients
            <List>
              {recipe.ingredients.map(i => (
                <ListItem>{i.name}</ListItem>
              ))}
            </List>
          </div>
        )
        }
        <CardActions>
          ingredients
              <Link to={`/recipe/${slugify(recipe.name)}`}>full recipe</Link>
        </CardActions>
      </Card >
    );
  }
}
