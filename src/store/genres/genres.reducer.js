import * as types from "./genres.types";

const initialState = {
  isLoading: true,
  genres: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GENRES_SUCCESS:
      return { ...state, genres: action.payload, isLoading: false };
    default:
      return state;
  }
};
