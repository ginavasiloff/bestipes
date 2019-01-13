import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { RecipeGrid } from "./views/recipe-grid";
import { Recipe } from "./views/recipe";
import { mockRecipes } from "./recipe-defs";

import { MatchT } from "./app-defs";

import "material-components-web/dist/material-components-web.min.css";
import "./App.css";
import { slugify } from "./utils";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route
              exact
              path="/"
              component={({ match }: { match: MatchT }) => (
                <RecipeGrid match={match} recipes={mockRecipes} />
              )}
            />
            <Route
              path="/recipe/:name"
              component={({ match }: { match: MatchT }) => (
                <Recipe
                  recipe={mockRecipes.find(
                    r => slugify(r.name) === match.params.name
                  )}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
