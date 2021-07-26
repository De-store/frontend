import { SELECT_WALLET_FAILURE, SELECT_WALLET_START, SELECT_WALLET_SUCCESS } from "../actionTypes/WalletSelect.types"
import { METAMASK_WALLET, PORTIS_WALLET } from '../../constants/constants'

export function selectWalletStart() {
    return {
        type: SELECT_WALLET_START,
    };
}

//Set current user
export function selectWalletSuccess(wallet: string) {
    return {
        type: SELECT_WALLET_SUCCESS,
        wallet,
    };
}

//Redirect to Login
export function selectWalletFailure() {
    return {
        type: SELECT_WALLET_FAILURE
    };
}

export const startSelectWallet = () => {
    return async (dispatch: any, getState: any) => {
        const state = getState();
        const { wallet } = state.wallet
        if (wallet === METAMASK_WALLET || wallet === PORTIS_WALLET)
            return
        else
            dispatch(selectWalletStart());
    };
}

export const completeSelectWallet = (wallet: string) => {
    return async (dispatch: any) => {
        if (wallet === METAMASK_WALLET || wallet === PORTIS_WALLET) {
            dispatch(selectWalletSuccess(wallet));
        }
        else
            dispatch(selectWalletFailure());
    };
}