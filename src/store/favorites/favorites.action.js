import * as types from "./favorites.types";

//save fave movies to localstorage
export const saveFaveMovies = () => (dispatch, getState) => {
  const { favorites } = getState().favorites;
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const addFave = movie => dispatch => {
  try {
    dispatch({ type: types.ADD_FAVE, payload: movie });
  } catch (error) {
    console.log(error);
  }
};

export const removeFave = id => dispatch => {
  try {
    dispatch({ type: types.REMOVE_FAVE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
