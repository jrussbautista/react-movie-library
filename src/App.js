import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./components/Home";
import Genre from "./components/Genre";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/discover/popular" />
        <Route exact path="/discover/:name">
          <Home />
        </Route>
        <Route exact path="/genres/:name">
          <Genre />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
