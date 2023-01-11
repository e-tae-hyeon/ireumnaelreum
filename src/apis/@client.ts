import axios from "axios";

const SERVER_URL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:4000/api";

const clinet = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});

export default clinet;
