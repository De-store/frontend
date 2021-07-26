import { LOCAL_STORAGE_PRIVATE_KEY, LOCAL_STORAGE_PUBLIC_KEY } from "../constants/constants"
import { LocalStorage } from "../constants/Interfaces"
import { instanceOfLocalStorage } from "./CheckInterfaceInstance"

export const getLocalStorage = (): object | undefined => {
    const localData: string = localStorage.getItem("DATA") || ""
    return localData === "" ? undefined : JSON.parse(localData)
}

export const setLocalStorage = (key: string, value: string): void => {
    var stored: object = JSON.parse(localStorage.getItem('DATA') || "")

    let setData: LocalStorage
    if (instanceOfLocalStorage(stored)) {
        setData = {
            publicKey: stored.publicKey ? stored.publicKey : '',
            privateKey: stored.privateKey ? stored.privateKey : ''
        }
    } else {
        setData = {
            publicKey: key === LOCAL_STORAGE_PUBLIC_KEY ? value : "",
            privateKey: key === LOCAL_STORAGE_PRIVATE_KEY ? value : ""
        }
    }
    localStorage.setItem('DATA', JSON.stringify(setData))
}