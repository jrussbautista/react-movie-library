import { useEffect, useReducer } from "react";
import movieAPI from "../api/movie-db";

const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { ...state, datas: action.payload, status: "success" };
    case FETCH_FAILURE:
      return { ...state, status: "fail", error: action.payload };
    default:
      return state;
  }
};

const useFetch = (endpoint, field) => {
  const initialState = {
    status: "loading",
    error: null,
    datas: {}
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, error, datas } = state;

  useEffect(() => {
    async function fetchDatas() {
      try {
        const res = await movieAPI.get(endpoint);
        const { data } = res;
        dispatch({ type: FETCH_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: FETCH_FAILURE, payload: error });
      }
    }
    fetchDatas();
  }, [endpoint]);

  return [status, error, datas];
};

export default useFetch;
