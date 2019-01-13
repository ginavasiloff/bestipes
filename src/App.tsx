import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { RecipeGrid } from "./recipe-grid";
import { mockRecipes } from "./recipe-defs";

import "material-components-web/dist/material-components-web.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route
            exact
            path="/"
            component={() => <RecipeGrid recipes={mockRecipes} />}
          />
        </Router>
      </div>
    );
  }
}

export default App;
