import * as types from "./genres.types";
import movieAPI from "../../api/movie-db";

export const fetchGenres = () => async dispatch => {
  try {
    const res = await movieAPI.get("genre/movie/list");
    const { data } = res;
    dispatch({ type: types.FETCH_GENRES_SUCCESS, payload: data.genres });
  } catch (error) {
    console.log(error);
  }
};
