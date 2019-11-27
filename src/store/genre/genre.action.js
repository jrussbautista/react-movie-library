import * as types from "./genre.types";
import movieAPI from "../../api/movie-db";

export const fetchGenre = (name, page) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.FETCH_GENRE_START });
    const { genres } = getState().genres;
    const genreId = genres.filter(genre => genre.name.toLowerCase() === name)[0]
      .id;
    const res = await movieAPI.get(`/discover/movie?with_genres=${genreId}`);
    const { results } = res.data;
    dispatch({ type: types.FETCH_GENRE_SUCCESS, payload: results });
  } catch (error) {
    console.log(error);
  }
};
