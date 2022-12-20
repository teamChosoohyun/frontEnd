import axios from "axios";

export const instance = axios.create({
  baseURL: "http://218.55.213.209:2020",
});
