import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./components/Home";
import Genre from "./components/Genre";
import Movie from "./components/Movie";
import Search from "./components/Search";
import ScrollToTop from "./components/ScrollToTop";
import Favorites from "./components/Favorites";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Redirect exact from="/" to="/discover/popular" />
        <Route exact path="/discover/:name">
          <Home />
        </Route>
        <Route exact path="/genres/:name">
          <Genre />
        </Route>
        <Route exact path="/discover/movie/:movieId">
          <Movie />
        </Route>
        <Route exact path="/search/:keyword">
          <Search />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
