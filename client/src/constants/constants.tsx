// env types
export const ENVIRONMENT = process.env.NODE_ENV

// app platform
export const REACT_APP_PLATFORM = process.env.REACT_APP_PLATFORM

// app base api url
export const REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL

// enable map
export const REACT_APP_ENABLE_MAP = process.env.REACT_APP_ENABLE_MAP

export const IMAGE_PATH_PREFIX =
  ENVIRONMENT === "development" ||  REACT_APP_PLATFORM !== "web" ? "/assets/" : "/build/assets/";


//PATHS  
export const baseSocketUrl =
  ENVIRONMENT === "development"
    ? "http://localhost:3000"
    : REACT_APP_BASE_API_URL;

// state name for APK 
export const APP_NAME = 'name'
export const APP_TAG_LINE = 'tagLine'
export const APP_DESCRIPTION = 'description'
export const APP_ICON = 'icon'
export const APK = 'apk'
export const APP_IMAGES = 'images'
export const TYPE_APK = 'application/vnd.android.package-archive'

export const LOCAL_STORAGE_PUBLIC_KEY = 'publicKey'
export const LOCAL_STORAGE_PRIVATE_KEY = 'privateKey'

export const PORTIS_WALLET = "PORTIS_WALLET"
export const METAMASK_WALLET = "METAMASK_WALLET"

// public images export
export const HOME_IMAGE = '/assets/logo.gif'