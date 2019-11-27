import * as types from "./genre.types";

const initialState = {
  isLoading: true,
  genres: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GENRE_SUCCESS:
      return { ...state, genres: action.payload, isLoading: false };
    case types.FETCH_GENRE_START:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
