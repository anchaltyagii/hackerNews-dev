import * as service from "../Services/index";
import * as actionTypes from "../ActionTypes/ActionTypes";

export const getNewsIdAction = (page, validate) => {
  return async (dispatch) => {
    const res = await service.newsUrl(page);
    if (res) {
      validate(res);
      dispatch(ACTION_CREATOR(actionTypes.GET_NEWS_ID, res));
    }
  };
};

export const getNewestAction = (page, validate) => {
  return async (dispatch) => {
    const res = await service.getNewestApi(page);
    if (res) {
      validate(res);
      dispatch(ACTION_CREATOR(actionTypes.GET_NEWEST, res));
    }
  };
};

export const getShowAction = (page, validate) => {
  return async (dispatch) => {
    const res = await service.getShowApi(page);
    if (res) {
      validate(res);
      dispatch(ACTION_CREATOR(actionTypes.GET_SHOW, res));
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
