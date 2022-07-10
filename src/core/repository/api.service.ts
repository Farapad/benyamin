import { Constant } from "../constant/constant";
import { Repository, ReturnResponse } from "./repository";

export class ApiService extends Repository {
  private static instance: ApiService;
  public baseUrl = Constant.ApiPrefix;

  public static getInstance(): ApiService {
    if (!ApiService.instance) ApiService.instance = new ApiService();
    return ApiService.instance;
  }

  private encodeQueryData(data) {
    const ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    return ret.join("&");
  }

  private setParams(data: ReturnResponse) {
    let params = "";
    if (data.params) {
      params += "?";
      params = this.encodeQueryData(data.params ?? {});
    }
    return params;
  }

  private compeleteUrl(
    data: ReturnResponse,
    apiUrl: string,
    useSlash = true
  ): string {
    return `${data.mainUrl ?? Constant.ApiPrefix}${
      useSlash ? "/" : ""
    }${apiUrl}${this.setParams(data)}`;
  }

  public business(data: ReturnResponse) {
    console.log("data.url");
    data.url = this.compeleteUrl(data, "", false);
    console.log(data.url);

    this.post(data);
  }
}
