import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchMovies } from "../../store/movies/movies.action";
import Layout from "../Layout";
import Banner from "../Shared/Banner";
import MovieList from "../Shared/MovieList";
import styled from "styled-components";
import Genres from "../Shared/Genres";
import Error from "../Shared/Error";
import Loading from "../Shared/Spinner/Loading";
import Pagination from "../Shared/Pagination";
import usePage from "../../hooks/usePage";
import Meta from "../Shared/Meta";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

const Home = () => {
  let { name } = useParams();
  const page = usePage();
  const dispatch = useDispatch();
  const { discover } = useSelector(state => state.movies);
  const { isLoading, movies, isError } = discover;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchMovies(name, page));
  }, [name, page, dispatch]);

  const title = name.charAt(0).toUpperCase() + name.substring(1);

  if (isError) {
    return <Error message="Something went wrong" />;
  }

  return (
    <Layout>
      <Meta title={`Movie Library | ${title.replace(/_/g, " ")}`} />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {movies.results && movies.results.length > 0 ? (
            <>
              <Banner movie={movies.results[0]} />
              <Container>
                <Genres />
                <MovieList movies={movies.results} />
                <Pagination initialPage={page} totalPage={movies.results} />
              </Container>
            </>
          ) : (
            <Error message="No movies found." />
          )}
        </div>
      )}
    </Layout>
  );
};

export default Home;
