import getWeb3 from "../../utils/getWeb3";
import DeStore from '../../contracts/DeStore.json'
import { SET_CONTRACT_FAILURE, SET_CONTRACT_START, SET_CONTRACT_SUCCESS } from "../actionTypes/SetContract.types";
import { Contract } from "../../constants/Interfaces";
import { emptyContract } from "../../constants/EmptyInterfaces";
import { METAMASK_WALLET } from "../../constants/constants";

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

export const setContract = (wallet: string = METAMASK_WALLET) => {
    return async (dispatch: any) => {
        try {
            // Get network provider and web3 instance.

            dispatch(setContractStart());

            const web3: any = await getWeb3(wallet);

            let DeStoreObj: any = DeStore

            const networkId = await web3.eth.net.getId();
            const deployedNetwork = DeStoreObj.networks[networkId];
            const instance: any = new web3.eth.Contract(
                DeStoreObj.abi,
                deployedNetwork && deployedNetwork.address,
            );

            console.log(instance.methods);

            dispatch(setContractSuccess({ web3, instance }));


        } catch (error) {
            console.error(error);
            dispatch(setContractFailure(emptyContract, error));

        }
    };
}