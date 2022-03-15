
import { ToastService } from "@/core/service/toast.service";
import { i18n } from "@/main";
import axios from "axios";
import FormData from 'form-data';
import { Constant } from "../constant/constant";
import { getToken } from "./utils.service";

export class FileUploaderService {
    private static instance: FileUploaderService

    public static getInstance(): FileUploaderService {
        if (!FileUploaderService.instance) FileUploaderService.instance = new FileUploaderService()
        return FileUploaderService.instance
    }

    private static base64ToBLob(dataURI) {
        if (dataURI != null && dataURI != '') {
            let byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0) {
                byteString = atob(dataURI.split(',')[1]);
            } else {
                byteString = unescape(dataURI.split(',')[1]);
            }
            const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            const ia = new Uint8Array(byteString.length);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            return new Blob([ia], { type: mimeString });
        } else {
            ToastService.getInstance().warning(i18n.global.tc('image_is_required'))
        }

    }

    uploadFile(data: FileUploaderReturnResponse, fileKey: string) {
        this.upload(data, Constant.UrlUpload_File, fileKey)
    }

    private upload(data: FileUploaderReturnResponse, url: string, fileKey: string) {
        let formData = new FormData();
        formData.append(fileKey, data.file);
        try {
            axios({
                url: url,
                method: "POST",
                data: formData,
                headers: {
                    'accept': 'application/json',
                    'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                    'Authorization': getToken(),
                },
                onUploadProgress: (progressEvent) => {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    data.onProgressChange?.call(null, percentCompleted);
                },
            }).then(d => {
                return d;
            }).then((response) => {
                if (response.data.url) {
                    data.onReceive?.call(null, response.data.url);
                } else {
                    data.onError?.call(null, 'error');
                }
            });
        } catch (err: any) {
            data.onError?.call(null, err);
        }
    }
}

export class FileUploaderReturnResponse {
    file?: any
    onProgressChange?: (progress: number) => void
    onError?: (message: String) => void
    onReceive?: (res: any) => void
}
