import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchRecommendedMovies } from "../../store/movies/movies.action";
import Loading from "../Shared/Spinner/Loading";
import MovieList from "../Shared/MovieList";
import Error from "../Shared/Error";

export default () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { recommend } = useSelector(state => state.movies);
  const { isLoading, movies, isError } = recommend;

  useEffect(() => {
    dispatch(fetchRecommendedMovies(movieId));
  }, [movieId, dispatch]);

  if (isError) {
    return <Error message="Something went wrong" />;
  }

  return (
    <div>{isLoading ? <Loading /> : <MovieList movies={movies.results} />}</div>
  );
};
