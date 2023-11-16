import { AnyAction } from "redux";
import * as actionTypes from "../ActionTypes/ActionTypes";

const initialState = {
  getNewsId: null,
  getNewsById: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NEWS_ID:
      return { ...state, getNewsId: action.payload };

    case actionTypes.GET_NEWS_BY_ID:
      return { ...state, getNewsById: action.payload };

    default:
      return state;
  }
};

export default Reducer;
