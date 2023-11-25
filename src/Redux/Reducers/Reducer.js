import { AnyAction } from "redux";
import * as actionTypes from "../ActionTypes/ActionTypes";

const initialState = {
  getNewsId: null,
  getNewsById: null,
  getNewest: null,
  getShow: null,
  getAsk: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NEWS_ID:
      return { ...state, getNewsId: action.payload };

    case actionTypes.GET_NEWS_BY_ID:
      return { ...state, getNewsById: action.payload };

    case actionTypes.GET_NEWEST:
      return { ...state, getNewest: action.payload };

    case actionTypes.GET_SHOW:
      return { ...state, getShow: action.payload };

    case actionTypes.GET_ASK:
      return { ...state, getAsk: action.payload };

    default:
      return state;
  }
};

export default Reducer;
