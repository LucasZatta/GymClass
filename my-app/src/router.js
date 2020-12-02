import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./container/Home"

export default function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  )
}