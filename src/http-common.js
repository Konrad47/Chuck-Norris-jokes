import axios from "axios";

export const HTTP = axios.create({
  baseURL: "https://api.chucknorris.io/jokes",
});
