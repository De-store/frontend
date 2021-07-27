import { OPEN_WALLET_SELECT_MODAL } from '../../constants/constants'
import { emptyContract } from '../../constants/EmptyInterfaces'
import { SET_CONTRACT_FAILURE, SET_CONTRACT_START, SET_CONTRACT_SUCCESS, SET_CONTRACT_DEFAULT, SELECT_WALLET, SET_CONTRACT_INITIAL } from '../actionTypes/SetContract.types'

//Set initial state for owner
const initialState = {
    contract: emptyContract,
    loading: null,
    error: null,
}

//Export new state using switch
const setContractReducer = (state = initialState, action: any = {}) => {
    switch (action.type) {

        case SET_CONTRACT_START:
            return {
                ...state,
                loading: true
            }

        case SET_CONTRACT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                contract: action.contract,
            }
        case SET_CONTRACT_FAILURE:
            return {
                ...state,
                loading: false,
                contract: action.contract,
                error: action.error,
            }
        case SET_CONTRACT_DEFAULT:
            return {
                ...state,
                error: null,
                loading: null
            }
        case SELECT_WALLET:
            return {
                ...state,
                error: OPEN_WALLET_SELECT_MODAL
            }
        case SET_CONTRACT_INITIAL:
            return initialState
        default:
            return state
    }
}

export default setContractReducer