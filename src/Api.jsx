import axios from "axios";

const instance = axios.create({
  baseURL: " http://jmbliss.com/replatform2/api/",
  assetsURL: " http://jmbliss.com/replatform2/",
});

export default instance;