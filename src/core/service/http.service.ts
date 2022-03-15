import { getToken } from "@/core/service/utils.service";
import axios from "axios";
import { Constant } from "../constant/constant";

let instance = axios.create({
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-cache",
  },
});

instance.defaults.timeout = 15000;

instance.interceptors.request.use(function (config) {
  if (config.url != Constant.ApiCheckRefreshToken) {
    config.headers.Authorization = getToken();
  }
  return config;
});

export default instance;
