import {SELECT_WALLET_FAILURE, SELECT_WALLET_START, SELECT_WALLET_SUCCESS} from '../actionTypes/WalletSelect.types'

//Set initial state for owner
const initialState = {
    wallet: "",
    selectingWallet: false,
    error: false
}

//Export new state using switch
const walletSelectReducer = (state = initialState, action: any = {}) => {
    switch (action.type) {

        case SELECT_WALLET_START:
            return {
                ...state,
                selectingWallet: true,
                error: false,
            }

        case SELECT_WALLET_SUCCESS:
            return {
                ...state,
                selectingWallet: false,
                error: false,
                wallet: action.wallet,
            }
        case SELECT_WALLET_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                wallet: "",
            }
        default:
            return state
    }
}

export default walletSelectReducer