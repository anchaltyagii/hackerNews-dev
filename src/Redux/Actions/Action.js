import * as service from "../Services/index";
import * as actionTypes from "../ActionTypes/ActionTypes";

export const getNewsIdAction = (validate) => {
  return async (dispatch) => {
    const res = await service.newsUrl();
    if (res) {
      validate(res);
      dispatch(ACTION_CREATOR(actionTypes.GET_NEWS_ID, res));
    }
  };
};

export const getNewsByIdAction = (id, validate) => {
  return async (dispatch) => {
    const res = await service.newsUrlById(id);
    if (res) {
      validate(res);
      dispatch(ACTION_CREATOR(actionTypes.GET_NEWS_BY_ID, res));
    }
  };
};

export const ACTION_CREATOR = (type, payload) => {
  return { type, payload };
};
