declare global {
    interface Window {
        REDUX_INITIAL_DATA: any
        __REDUX_DEVTOOLS_EXTENSION__: any
        location: Location
        recaptchaVerifier: any
        recaptchaWidgetId: any
    }
}

export interface ApiDataFile {
    type: string,
    hash: string
}

export interface PublishAppData {
    name: string,
    tagLine: string,
    description: string,
    icon: File | ApiDataFile
    apk: File | ApiDataFile,
    images: File | ApiDataFile
    // images: Array<File>
}

export interface payload {
    id: string
}

export interface ActionObject {
    type: string
    payload: payload
}

export interface ActionWithPayload {
    type: string
    payload: any
}

export interface ApiData {
    name: string,
    tagLine: string,
    description: string,
    apk: {
        type: string,
        hash: string
    },
    icon: {
        type: string,
        hash: string
    },
    images: {
        type: string,
        hash: string
    }
}

export interface LocalStorage {
    publicKey: string,
    privateKey: string
}

// -------- FOR REDUCERS --------- //

export interface Contract {
    web3: any
    instance: any,
    accounts: []
}