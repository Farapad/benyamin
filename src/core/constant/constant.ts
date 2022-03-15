export class Constant {
    public static readonly ApiPrefix_Setting = 'http://api.setting.uper-me.com/api/v1/setting/'
    public static readonly ApiPrefix_User = 'http://api.user.uper-me.com/api/v1/user/'

    public static readonly UrlUpload_File = 'http://upstatics.uper-me.com/v2/file/';

    public static readonly ApiCheckRefreshToken = 'http://api.user.uper-me.com/api/v1/user/MainPage/CheckRefreshToken';
}

export enum EnumKeys {
    KeyToken = 'token',
    KeyRefreshToken = 'refresh-token',
    KeyLanguage = 'language',
}

export const BASE_TAKE = 10;
