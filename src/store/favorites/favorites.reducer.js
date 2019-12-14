import * as types from "./favorites.types";

const initialState = {
  favorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FAVE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case types.REMOVE_FAVE:
      const favorites = state.favorites.filter(
        favorite => favorite.id !== action.payload
      );
      return { ...state, favorites };
    default:
      return state;
  }
};
