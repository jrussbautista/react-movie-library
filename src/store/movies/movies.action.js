import movieAPI from "../../api/movie-db";
import * as types from "./movies.types";

export const fetchMovies = name => async dispatch => {
  try {
    let endPoint;
    if (name === "discover") {
      endPoint = "/discover/movie";
    } else {
      endPoint = `/movie/${name}`;
    }
    const res = await movieAPI.get(endPoint);
    const { data } = res;
    dispatch({ type: types.FETCH_MOVIES_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
