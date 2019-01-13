import * as React from "react";
import { Typography } from "@rmwc/typography";
import { List, SimpleListItem } from "@rmwc/list";
import { RecipeT } from "../recipe-defs";

export const Recipe = ({ recipe }: { recipe: RecipeT | undefined }) => {
  return !!recipe ? (
    <React.Fragment>
      <Typography use="headline3">{recipe.name}</Typography>
      <List twoLine>
        {recipe.ingredients.map((i, idx) => (
          <SimpleListItem
            id={`${idx}-${i.name.replace(" ", "-")}`}
            secondaryText={i.details}
            text={`${i.quantity} ${i.name}`}
          />
        ))}
      </List>
    </React.Fragment>
  ) : (
    <div>no recipe found</div>
  );
};
