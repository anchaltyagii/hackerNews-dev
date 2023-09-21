import axios from "axios";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";

export const newsUrl = () => {
  axios
    .get(`${baseUrl}`)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
};
