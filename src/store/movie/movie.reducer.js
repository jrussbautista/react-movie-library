import * as types from "./movie.types";

const initialState = {
  isLoading: true,
  movie: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_SUCCESS:
      return { ...state, movie: action.payload, isLoading: false };
    case types.FETCH_MOVIE_START:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
