import { LOCAL_STORAGE_WALLET } from '../constants/constants'

export const getLocalStorage = () => {
    const _localStorage: any = localStorage.getItem(LOCAL_STORAGE_WALLET)
    const selectedWallet: any = JSON.parse(_localStorage)
    return selectedWallet
}

export const setLocalStorage = (wallet: string) => {
    const _localStorage: any = localStorage.getItem(LOCAL_STORAGE_WALLET)
    let selectedWallet: any = JSON.parse(_localStorage) ? JSON.parse(_localStorage) : {}
    selectedWallet['wallet'] = wallet
    localStorage.setItem(LOCAL_STORAGE_WALLET, JSON.stringify(selectedWallet))
}