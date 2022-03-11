import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone-api-d.herokuapp.com/",
});

export default instance;
