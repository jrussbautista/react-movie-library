import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSearchMovies } from "../../store/movies/movies.action";
import Layout from "../Layout";
import Banner from "../Shared/Banner";
import MovieList from "../Shared/MovieList";
import styled from "styled-components";
import Error from "../Shared/Error";
import Loading from "../Shared/Spinner/Loading";
import Pagination from "../Shared/Pagination";
import usePage from "../../hooks/usePage";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector(state => state.movies);
  const { isLoading, movies } = search;
  const { keyword } = useParams();
  const page = usePage();

  useEffect(() => {
    dispatch(fetchSearchMovies(keyword, page));
  }, [keyword, page, dispatch]);

  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {movies.results.length > 0 ? (
            <>
              <Banner movie={movies.results[0]} />
              <Container>
                <MovieList movies={movies.results} />
                <Pagination initialPage={page} totalPage={movies.results} />
              </Container>
            </>
          ) : (
            <Error message={`No results found for ${keyword}`} />
          )}
        </div>
      )}
    </Layout>
  );
};

export default Search;
