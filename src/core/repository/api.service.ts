import { Constant } from '../constant/constant';
import { Repository, ReturnResponse } from './repository';

export class ApiService extends Repository {
    private static instance: ApiService
    public baseUrl = Constant.ApiPrefix

    public static getInstance(): ApiService {
        if (!ApiService.instance) ApiService.instance = new ApiService()
        return ApiService.instance
    }

    public business(data: ReturnResponse) {
        data.url = `${this.baseUrl}user/business`;
        this.post(data)
    }

}
