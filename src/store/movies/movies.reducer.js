import * as types from "./movies.types";

const initialState = {
  discover: { isLoading: true },
  search: { isLoading: true },
  genre: { isLoading: true }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES_START:
      return {
        ...state,
        [action.name]: { ...state[action.name], isLoading: true }
      };
    case types.FETCH_MOVIES_END:
      return {
        ...state,
        [action.name]: { ...state[action.name], isLoading: false }
      };
    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        [action.name]: { isLoading: false, movies: action.payload }
      };
    case types.CLEAR_MOVIES:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
