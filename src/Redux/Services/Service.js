import axios from "axios";

const baseUrl = "https://api.hnpwa.com/v0/news";
// https://api.hnpwa.com/v0/news

export const newsUrl = async (page) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/${page}.json`,
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
