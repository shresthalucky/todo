import React from "react";
import { Switch, Route } from "react-router-dom";

import { ROUTES } from "./constants";
import List from "./containers/List/List";

const Routes = ({ todos, ...props }) => {
  return (
    <Switch>
      <Route exact path={ROUTES.all.path}>
        <List todos={todos} {...props} />
      </Route>

      <Route exact path={ROUTES.active.path}>
        <List todos={todos.filter((todo) => todo.active)} {...props} />
      </Route>

      <Route exact path={ROUTES.done.path}>
        <List todos={todos.filter((todo) => !todo.active)} {...props} />
      </Route>
    </Switch>
  );
};

export default Routes;
