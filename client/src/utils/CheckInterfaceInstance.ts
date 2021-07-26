import { APP_NAME, APP_TAG_LINE, APP_DESCRIPTION, APK, APP_ICON, APP_IMAGES, LOCAL_STORAGE_PRIVATE_KEY, LOCAL_STORAGE_PUBLIC_KEY } from "../constants/constants";
import { ApiData, LocalStorage } from "../constants/Interfaces";

export const instanceOfAppData = (object: any): object is ApiData => {
    return (
        APP_NAME in object &&
        APP_TAG_LINE in object &&
        APP_DESCRIPTION in object &&
        APK in object &&
        APP_ICON in object &&
        APP_IMAGES in object
    )
}

export const validAppData = (key: string): boolean => {
    return (
        key === APP_NAME ||
        key === APP_TAG_LINE ||
        key === APP_DESCRIPTION ||
        key === APK ||
        key === APP_ICON ||
        key === APP_IMAGES
    )
}

export const instanceOfLocalStorage = (object: any): object is LocalStorage => {
    return (
        LOCAL_STORAGE_PRIVATE_KEY in object &&
        LOCAL_STORAGE_PUBLIC_KEY in object
    )
}