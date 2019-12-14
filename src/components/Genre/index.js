import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGenreMovies } from "../../store/movies/movies.action";
import { fetchGenres } from "../../store/genres/genres.action";
import Layout from "../Layout";
import Banner from "../Shared/Banner";
import MovieList from "../Shared/MovieList";
import styled from "styled-components";
import Genres from "../Shared/Genres";
import Error from "../Shared/Error";
import Loading from "../Shared/Spinner/Loading";
import Pagination from "../Shared/Pagination";
import usePage from "../../hooks/usePage";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

const Genre = () => {
  const dispatch = useDispatch();
  const { genre } = useSelector(state => state.movies);
  const { movies, isLoading, isError } = genre;
  const { name } = useParams();
  const page = usePage();

  const fetchGenresInfo = async () => {
    await dispatch(fetchGenres());
    dispatch(fetchGenreMovies(name, page));
  };

  useEffect(() => {
    fetchGenresInfo();
  }, [name, page, dispatch]);

  if (isError) {
    return <Error message="Something went wrong" />;
  }

  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : movies.results.length > 0 ? (
        <div>
          <Banner movie={movies.results[0]} />
          <Container>
            <Genres />
            <MovieList movies={movies.results} />
            <Pagination initialPage={page} totalPage={movies.results} />
          </Container>
        </div>
      ) : (
        <Error message={`No movies found for ${genre}`} />
      )}
    </Layout>
  );
};

export default Genre;
