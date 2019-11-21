import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../Shared/Spinner/Loading";
import MovieList from "../Shared/MovieList";
import Error from "../Shared/Error";

export default () => {
  const { movieId } = useParams();
  const [status, error, datas] = useFetch(`/movie/${movieId}/recommendations`);
  const { results } = datas;

  if (error) {
    return <Error />;
  }

  return (
    <div>
      {status === "loading" ? <Loading /> : <MovieList movies={results} />}
    </div>
  );
};
