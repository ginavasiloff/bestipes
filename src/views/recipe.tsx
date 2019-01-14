import * as React from "react";

import { Typography } from "@rmwc/typography";
import { List, ListItem, SimpleListItem } from "@rmwc/list";
import { RecipeT } from "../recipe-defs";

import styles from "./recipe.module.css";

export const Recipe = ({ recipe }: { recipe: RecipeT | undefined }) => {
  return !!recipe ? (
    <React.Fragment>
      <Typography use="headline4">{recipe.name}</Typography>
      <div className={styles.recipe}>
        <div className={styles.ingredients}>
          <Typography use="headline6">Ingredients</Typography>
          <List twoLine>
            {recipe.ingredients.map((i, idx) => (
              <SimpleListItem
                id={`${idx}-${i.name.replace(" ", "-")}`}
                secondaryText={i.details}
                text={`${i.quantity} ${i.name}`}
              />
            ))}
          </List>
        </div>
        <div className={styles.instructions}>
          <Typography use="headline6">Instructions</Typography>
          <div className={styles.steps}>
            {recipe.instructions.map((i, idx) => (
              <Typography tag="p" key={`step-${idx}`} use="body1">
                {i}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <div>no recipe found</div>
  );
};
