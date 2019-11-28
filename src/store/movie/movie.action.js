import movieAPI from "../../api/movie-db";
import * as types from "./movie.types";

export const fetchMovie = id => async dispatch => {
  try {
    const res = await movieAPI.get(`/movie/${id}`);
    const { data } = res;
    dispatch({ type: types.FETCH_MOVIE_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
