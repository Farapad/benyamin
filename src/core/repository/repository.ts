import httpClientBase from "@/core/service/http.service";
import { ToastService } from "@/core/service/toast.service";
import { i18n } from "@/main";
import { Constant, EnumKeys } from "../constant/constant";
import router from "../router/router";
import { AuthStore } from "../store/auth.store";

export class Repository {
    public static isRefreshingToken = false;

    private static validateResponse(res, data: ReturnResponse) {
        if (!(typeof res === "object")) {
            if (data.dontShowError !== true)
                ToastService.getInstance().error(i18n.global.tc("anErrorAccrue"));
            return false;
        }

        if (!(res.payload || res.message || res.statusCode)) {
            if (data.dontShowError !== true)
                ToastService.getInstance().error(i18n.global.tc("anErrorAccrue"));
            return false;
        }

        if (res.statusCode != 200 && res.statusCode != 204) {
            if (res.statusCode == 410) {
                return true;
            }
            if (res.statusCode != 401 && data.dontShowError !== true)
                ToastService.getInstance().info(i18n.global.tc('refreshing'));
            if (localStorage.getItem(EnumKeys.KeyRefreshToken)) {
                const body = {
                    refreshToken: localStorage.getItem(
                        EnumKeys.KeyRefreshToken
                    ),
                };
                httpClientBase
                    .post(Constant.ApiCheckRefreshToken, body)
                    .then((value) => value)
                    .then((value) => {
                        let token = `Bearer ${value.data.payload.hashToken}`;
                        let refreshToken = value.data.payload.refreshToken;
                        localStorage.setItem(EnumKeys.KeyToken, token);
                        localStorage.setItem(
                            EnumKeys.KeyRefreshToken,
                            refreshToken
                        );
                    })
                    .catch((e) => {
                    });
            }

            return false;
        }

        return true;
    }

    get(data: ReturnResponse) {
        data.onLoadChange?.call(true, true);

        httpClientBase
            .get(data.url ?? "")
            .then((value) => value)
            .then((value) => {
                let isValidate = Repository.validateResponse(value.data, data);
                data.onLoadChange?.call(false, false);
                if (isValidate) {
                    data.onReceive?.call(null, value.data.payload);
                    return;
                } else {
                    if (value.data.statusCode == 401 || value.status === 401) {
                        console.log('xxx');
                        data.onLoadChange?.call(true, true);
                        this.refreshToken(() => this.get(data));
                        console.log(this.refreshToken, 'ddd')
                    }
                    data.onError?.call(null, value.data);
                }
            })
            .catch((e) => {
                this.networkErrorHandler(e, data);
            });
    }

    post(data: ReturnResponse) {
        data.onLoadChange?.call(true, true);
        httpClientBase
            .post(data.url ?? "", data.body)
            .then((value) => value)
            .then((value) => {
                let isValidate = Repository.validateResponse(value.data, data);
                data.onLoadChange?.call(false, false);
                if (isValidate) {
                    data.onReceive?.call(null, value.data.payload);
                } else {
                    if (value.data.statusCode == 401 || value.status === 401) {
                        console.log('xxx');

                        data.onLoadChange?.call(true, true);
                        this.refreshToken(() => this.post(data));
                        console.log(this.refreshToken, 'ddd')
                    }
                    data.onError?.call(null, value.data);
                }
            })
            .catch((e) => {
                this.networkErrorHandler(e, data);
            });
    }

    put(data: ReturnResponse) {
        data.onLoadChange?.call(true, true);
        httpClientBase
            .put(data.url ?? "", data.body)
            .then((value) => value)
            .then((value) => {
                let isValidate = Repository.validateResponse(value.data, data);
                data.onLoadChange?.call(false, false);
                if (isValidate) {
                    data.onReceive?.call(null, value.data.payload);
                } else {
                    if (value.data.statusCode == 401 || value.status === 401) {
                        data.onLoadChange?.call(true, true);
                        this.refreshToken(() => this.put(data));
                        console.log(this.refreshToken, 'ddd')
                    }
                    data.onError?.call(null, value.data);
                }
            })
            .catch((e) => {
                this.networkErrorHandler(e, data);
            });
    }

    delete(data: ReturnResponse) {
        data.onLoadChange?.call(true, true);
        httpClientBase
            .delete(data.url ?? "", { data: data.body })
            .then((value) => value)
            .then((value) => {
                let isValidate = Repository.validateResponse(value.data, data);
                data.onLoadChange?.call(false, false);
                if (isValidate) {
                    data.onReceive?.call(null, value.data.payload);
                } else {
                    if (value.data.statusCode === 401 || value.status === 401) {
                        data.onLoadChange?.call(true, true);
                        this.refreshToken(() => this.delete(data));
                        console.log(this.refreshToken, 'ddd')
                    }
                    data.onError?.call(null, value.data);
                }
            })
            .catch((e) => {
                this.networkErrorHandler(e, data);
            });
    }

    networkErrorHandler(e, data) {
        data.onLoadChange?.call(false, false);
        data.onError?.call(null, i18n.global.tc("serverError"));
        ToastService.getInstance().error(e.message);
    }


    private refreshToken(onRefreshSuccess) {
        if (Repository.isRefreshingToken) return;
        Repository.isRefreshingToken = true;
        const body = {
            refreshToken: localStorage.getItem(
                EnumKeys.KeyRefreshToken
            ),
        };
        httpClientBase
            .post(Constant.ApiCheckRefreshToken, body)
            .then((value) => value)
            .then((value) => {
                let token = `Bearer ${value.data.payload.hashToken}`;
                let refreshToken = value.data.payload.refreshToken;
                localStorage.setItem(EnumKeys.KeyToken, token);
                localStorage.setItem(
                    EnumKeys.KeyRefreshToken,
                    refreshToken
                );
                onRefreshSuccess();
                Repository.isRefreshingToken = false;
            })
            .catch((e) => {
                this.errorInRefreshToken();
            });
    }

    private errorInRefreshToken() {
        ToastService.getInstance().error(i18n.global.tc("errorInRefreshToken"));
        localStorage.clear();
        AuthStore().isLoggedIn = false;
        router.push("/login");
        Repository.isRefreshingToken = false;
    }
}

export class ReturnResponse {
    url?: string;
    urlContent?: any;
    dontShowError?: boolean;
    body?: any;
    onLoadChange?: (loadStatus: boolean) => void;
    onError?: (message: String) => void;
    onReceive?: (res: any) => void;
}
