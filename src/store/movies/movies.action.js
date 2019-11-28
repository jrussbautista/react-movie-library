import movieAPI from "../../api/movie-db";
import * as types from "./movies.types";

export const fetchMovies = (name, page) => async dispatch => {
  try {
    let endPoint;
    if (name === "discover") {
      endPoint = `/discover/movie?page=${page}`;
    } else {
      endPoint = `/movie/${name}?page=${page}`;
    }
    const res = await movieAPI.get(endPoint);
    const { data } = res;
    dispatch({
      type: types.FETCH_MOVIES_SUCCESS,
      payload: data,
      name: "discover"
    });
    dispatch({ type: types.FETCH_MOVIES_END });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchMovies = (keyword, page) => async dispatch => {
  try {
    dispatch({ type: types.FETCH_MOVIES_START, name: "search" });
    const res = await movieAPI.get(
      `/search/movie?query=${keyword}&page=${page}`
    );
    const { data } = res;
    dispatch({
      type: types.FETCH_MOVIES_SUCCESS,
      payload: data,
      name: "search"
    });
    dispatch({ type: types.FETCH_MOVIES_END, name: "search" });
  } catch (error) {
    console.log(error);
  }
};

export const fetchGenreMovies = (name, page) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.FETCH_MOVIES_START, name: "genre" });
    const { genres } = getState().genres;
    const genreId = genres.filter(genre => genre.name.toLowerCase() === name)[0]
      .id;
    const res = await movieAPI.get(
      `/discover/movie?with_genres=${genreId}&page=${page}`
    );
    const { data } = res;
    dispatch({
      type: types.FETCH_MOVIES_SUCCESS,
      payload: data,
      name: "genre"
    });
    dispatch({ type: types.FETCH_MOVIES_END, name: "genre" });
  } catch (error) {
    console.log(error);
  }
};
