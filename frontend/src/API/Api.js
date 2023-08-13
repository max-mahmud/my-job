import axios from "axios";
const API = axios.create({ baseURL: "https://my-job-sigma.vercel.app/api" });
// const API = axios.create({ baseURL: "http://localhost:4000/api" });

export default API;
