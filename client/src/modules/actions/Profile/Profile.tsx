import { graphQuery } from '../../../services/Contract'
import {
    GET_FILES_START,
    GET_FILES_FAILURE,
    GET_FILES_SUCCESS,
} from '../../actionTypes/Profile/Types'
//Get customer property info by id
export function getFileData() {
    //Return dispatch
    return async (dispatch: any, getState: any) => {
        try {

            const state = getState();
            //Dispatch start
            dispatch(getFileDataStart())
            //Send properties get request

            const applications = await graphQuery(state)
            dispatch(getFileDataSuccess(applications))

        } catch (err) {
            console.log("ERR ", err, err.message, err.data)
            dispatch(getFileDataFailure(err.message))

        }
    }
}


//Get customer property basic info by id start
export function getFileDataStart() {
    return {
        type: GET_FILES_START,
        payload: {},
    }
}

//Get customer property basic info by id success
export function getFileDataSuccess(allFiles: any) {
    return {
        type: GET_FILES_SUCCESS,
        payload: { files: allFiles },
    }
}

//Get customer property basiic info by id failure
export function getFileDataFailure(error: any) {
    return {
        type: GET_FILES_FAILURE,
        payload: { error },
    }
}