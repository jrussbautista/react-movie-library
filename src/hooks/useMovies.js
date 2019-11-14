import { useEffect, useState } from "react";
import movieApi from "../api/movie-db";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const res = await movieApi.get("/discover/movie");
        const { data } = res;
        setMovies(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return [isLoading, error, movies];
};

export default useMovies;
