import * as React from "react";

import {
  Card,
  CardAction,
  CardActions,
  CardActionButtons,
  CardMedia,
  CardMediaContent
} from "@rmwc/card";
import { List, SimpleListItem } from "@rmwc/list";
import { Typography } from "@rmwc/typography";

import { RecipeT } from "./recipe-defs";

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
        <CardMedia
          sixteenByNine
          style={{ backgroundImage: `url(${recipe.image})` }}
        >
          <CardMediaContent>
            <Typography
              use="headline4"
              theme="text-primary-on-dark"
              style={{
                padding: "0.5rem 1rem",
                backgroundImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.55) 75%)",
                bottom: "0",
                left: "0",
                right: "0",
                position: "absolute",
                textTransform: "capitalize",
                textAlign: "left"
              }}
            >
              {recipe.name}
            </Typography>
          </CardMediaContent>
        </CardMedia>
        {this.state.isShowingIngredients && (
          <div>
            <Typography use="headline6">Ingredients</Typography>
            <List>
              {recipe.ingredients.map(i => (
                <SimpleListItem text={i.name} />
              ))}
            </List>
          </div>
        )}
        <CardActions>
          <CardActionButtons>
            <CardAction
              onClick={() => this.setState({ isShowingIngredients: true })}
            >
              ingredients
            </CardAction>
            <CardAction>full recipe</CardAction>
          </CardActionButtons>
        </CardActions>
      </Card>
    );
  }
}
