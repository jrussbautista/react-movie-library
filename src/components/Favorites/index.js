import React from "react";
import Layout from "../Layout";
import MovieList from "../Shared/MovieList";

const Favorites = () => {
  return (
    <Layout>
      <MovieList movies={[]} />
    </Layout>
  );
};

export default Favorites;
