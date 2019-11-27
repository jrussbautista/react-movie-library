import * as types from "./movies.types";

const initialState = {
  isLoading: true,
  movies: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, isLoading: false };
    default:
      return state;
  }
};
