import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Layout from "../Layout";
import Banner from "../Shared/Banner";
import MovieList from "../Shared/MovieList";
import styled from "styled-components";
import Genres from "../Shared/Genres";
import Error from "../Shared/Error";
import Loading from "../Shared/Spinner/Loading";
import { fetchMovies } from "../../store/movies/movies.action";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

const Home = () => {
  let { name } = useParams();
  const dispatch = useDispatch();
  const { movies, isLoading } = useSelector(state => state.movies);
  const { results } = movies;

  useEffect(() => {
    dispatch(fetchMovies(name));
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Banner movie={results[0]} />
          <Container>
            <Genres />
            <MovieList movies={results} />
          </Container>
        </div>
      )}
    </Layout>
  );
};

export default Home;
