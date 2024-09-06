import axios from "axios";
const bestURL = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
  bestURL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default instance;
