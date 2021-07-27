import getWeb3 from "../../utils/getWeb3";
import DeStore from '../../contracts/DeStore.json'
import { SET_CONTRACT_FAILURE, SET_CONTRACT_START, SET_CONTRACT_SUCCESS, SET_CONTRACT_DEFAULT, SELECT_WALLET, SET_CONTRACT_INITIAL } from "../actionTypes/SetContract.types";
import { Contract } from "../../constants/Interfaces";
import { emptyContract } from "../../constants/EmptyInterfaces";
import { METAMASK_WALLET, OPEN_WALLET_SELECT_MODAL, PORTIS_WALLET } from "../../constants/constants";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";


export function setContractStart() {
    return {
        type: SET_CONTRACT_START,
    };
}

//Set current user
export function setContractSuccess(contract: Contract) {
    return {
        type: SET_CONTRACT_SUCCESS,
        contract,
    };
}

//Redirect to Login
export function setContractFailure(contract: Contract, error: any) {
    return {
        type: SET_CONTRACT_FAILURE,
        contract,
        error
    };
}

export function setContractDefault() {
    return {
        type: SET_CONTRACT_DEFAULT,
    }
}

export function setSelectWallet() {
    return {
        type: SELECT_WALLET,
    }
}

export function setContractInitial() {
    return {
        type: SET_CONTRACT_INITIAL
    }
}

export const setContract = (wallet?: string) => {

    return async (dispatch: any) => {
        try {
            // Get network provider and web3 instance.

            dispatch(setContractStart());

            const selectedWallet: any = getLocalStorage()

            if ((wallet && PORTIS_WALLET) || (wallet && METAMASK_WALLET) || (selectedWallet && selectedWallet.wallet === PORTIS_WALLET) || (selectedWallet && selectedWallet.wallet === METAMASK_WALLET)) {

                const web3: any = await getWeb3(wallet ? wallet : selectedWallet.wallet);

                let DeStoreObj: any = DeStore

                const networkId = await web3.eth.net.getId();
                const deployedNetwork = DeStoreObj.networks[networkId];
                const instance: any = new web3.eth.Contract(
                    DeStoreObj.abi,
                    deployedNetwork && deployedNetwork.address,
                );

                if (wallet)
                    setLocalStorage(wallet)

                console.log(instance.methods);
                
                const accounts = await web3.eth.getAccounts()

                dispatch(setContractSuccess({ web3, instance, accounts }));
            }
            else {
                dispatch(setContractFailure(emptyContract, OPEN_WALLET_SELECT_MODAL));
            }


        } catch (error) {
            console.error(error);
            dispatch(setContractFailure(emptyContract, error));
        }
    };
}

export const closePopup = () => {
    return (dispatch: any) => {
        dispatch(setContractDefault());
    }
}

export const selectWallet = () => {
    return (dispatch: any) => {
        dispatch(setSelectWallet())
    }
}

export const logoutWallet = () => {
    return (dispatch: any) => {
        setLocalStorage('')
        dispatch(setContractInitial())
    }
}