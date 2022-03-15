import { EnumKeys } from "@/core/constant/constant";
import { LanguageType } from "@/core/enum/enums";
import { i18n } from "@/main";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { ref } from "vue";
import { AuthStore } from "../store/auth.store";

export const WindowLoading = ref(false);

export const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
}

export function changeAppDirection(locale) {
    document.body.dir = locale === 'fa' ? 'rtl' : 'ltr'
    localStorage.setItem(EnumKeys.KeyLanguage, locale)
}

export function getLanguageFromCache() {
    let lang = localStorage.getItem(EnumKeys.KeyLanguage);
    if (lang === LanguageType.en) {
        return LanguageType.en;
    } else if (lang === LanguageType.fa) {
        return LanguageType.fa;
    } else {
        localStorage.setItem(EnumKeys.KeyLanguage, LanguageType.fa)
        return LanguageType.fa;
    }
}

export function getDecodedToken() {
    let token = localStorage.getItem(EnumKeys.KeyToken);
    return jwt_decode(token)
}

export function isLoggedIn() {
    let x = localStorage.getItem(EnumKeys.KeyToken)
    return x && typeof x == 'string';
}


export function accountNumberFormat(number, spaceChar = ' ') {

    number = number.toString().match(/.{1,4}/g)
    let newString = '';
    for (let i = 0; i < number.length; i++) {
        newString += number[i] + spaceChar
    }
    return newString;
}

export function priceFormat(price) {
    if (Number(price) > 0) {
        return Intl.NumberFormat().format(Number(price));
    } else {
        return price;
    }
}


export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function copyToClipboard(str: string) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

export function slugify(text: String) {
    if (text == null) {
        return "";
    }
    text = text.trim();
    text = text.toLowerCase();
    text = text.replace('/', "-");
    text = text.replace(/[\u200B-\u200D\uFEFF]/g, '-');
    text = text.replace(/ /g, "-");
    text = text.replace("/[^a-z0-9_\s-ءاأإآؤئبتثجحخدذرزسشصضطظعغفقكلمنهويةى]/u", "");
    text = text.replace("/[\s-]+/", " ");
    text = text.replace("/[\s_]/", '-');
    text = text.replace("--", '-');
    text = text.replace("---", '-');
    text = text.replace("----", '-');
    text = text.replace("-----", '-');
    return text;
}

export function toEnglishDigits(str) {
    const persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"]
    const arabicNumbers = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"]
    const englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    return str.split("").map(c => englishNumbers[persianNumbers.indexOf(c)] ||
        englishNumbers[arabicNumbers.indexOf(c)] || c).join("")
}

export const getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            const base64data = reader.result;
            resolve(base64data);
        }
    });
}


export function getToken() {
    if (AuthStore().token != "") {
        return AuthStore().token;
    } else {
        return localStorage.getItem(EnumKeys.KeyToken) ?? "";
    }
}

export const formatCardNumber = value => {
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g
    const onlyNumbers = value.replace(/[^\d]/g, '')

    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
        [$1, $2, $3, $4].filter(group => !!group).join(' ')
    )
}

export function lattenFilterFunction(value: String) {
    return value.toLowerCase().replaceAll(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|0|1|2|3|4|5|6|7|8|9/g, '')
}

export function farsiFilterFunction(value: String) {
    return value.toLowerCase().replaceAll(/الف|ب|پ|ت|ث|ج|چ|‌|ح|خ|د|ذ|ر|ز|‌|ژ|س|‌|ش|ص|ض|ط|ظ|ع|غ|ف|ق|ک|گ|ل|م|ن|و|ه|ی|ء|آ|اً|هٔ|ة|0|1|2|3|4|5|6|7|8|9/g, '')
}

export function translateToEnglish(value: String, onTranslate: Function) {
    axios.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl=fa&tl=en&dt=t&q=' + value).then((res) => {
        const result = String(res.request.response).substring(4, String(res.request.response).indexOf("\"", 4));
        onTranslate(result);
    }, (error) => {
        onTranslate(i18n.global.tc('error'))
    });
}
