import { Constant } from '../constant/constant';
import { Repository, ReturnResponse } from './repository';

export class ApiService extends Repository {
    private static instance: ApiService
    public baseUrl = Constant.ApiPrefix

    public static getInstance(): ApiService {
        if (!ApiService.instance) ApiService.instance = new ApiService()
        return ApiService.instance
    }

    private compeleteUrl(data: ReturnResponse, apiUrl: string): string {
        return `${data.mainUrl ?? Constant.ApiPrefix}/${apiUrl}`
    }

    public business(data: ReturnResponse) {
        data.url = this.compeleteUrl(data, 'user/business');
        this.post(data)
    }

}
