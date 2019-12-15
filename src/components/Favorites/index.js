import React from "react";
import { useSelector } from "react-redux";
import Layout from "../Layout";
import MovieList from "../Shared/MovieList";
import styled from "styled-components";
import Banner from "../Shared/Banner";
import Error from "../Shared/Error";

const Container = styled.div`
  max-width: 1200px;
  margin: 0rem auto;
`;

const Heading = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  padding: 2rem;
`;

const Favorites = () => {
  const { favorites } = useSelector(state => state.favorites);
  return (
    <Layout>
      {favorites.length > 0 ? (
        <>
          <Banner movie={favorites[0]} />
          <Container>
            <Heading>Your Favorites </Heading>
            <MovieList movies={favorites} />
          </Container>
        </>
      ) : (
        <Error message="You have no favorites yet." />
      )}
    </Layout>
  );
};

export default Favorites;
