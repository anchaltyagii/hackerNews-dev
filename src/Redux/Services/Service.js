import axios from "axios";

const baseUrl = "https://hacker-news.firebaseio.com/v0";

export const newsUrl = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/topstories.json?print=pretty`,
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
