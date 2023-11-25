import axios from "axios";

const baseUrl = "https://api.hnpwa.com/v0";
// https://api.hnpwa.com/v0/news

export const newsUrl = async (page) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/news/${page}.json`,
    });
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const getNewestApi = async (page) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/newest/${page}.json`,
    });
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const getShowApi = async (page) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/show/${page}.json`,
    });
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const getAskApi = async (page) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/ask/${page}.json`,
    });
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const newsUrlById = async (id) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/item/${id}.json?print=pretty`,
    });
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};
