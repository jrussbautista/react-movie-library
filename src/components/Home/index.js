import React from "react";
import Layout from "../Layout";
import useMovies from "../../hooks/useMovies";

const Home = () => {
  const [isLoading, error, movies] = useMovies();

  if (error) {
    return <div>Error here</div>;
  }

  return (
    <Layout>
      {isLoading ? <div>Loading...</div> : <div>Home page here</div>}
    </Layout>
  );
};

export default Home;
