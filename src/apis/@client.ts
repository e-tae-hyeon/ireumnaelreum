import axios from "axios";

const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_END_POINT
    : "http://localhost:4000/api";

const clinet = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});

export default clinet;
