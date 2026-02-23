import axios from "axios";
impo
export const createShortUrl = (data) =>
  axios.post("http://localhost:5000/api/url/shorten", data);