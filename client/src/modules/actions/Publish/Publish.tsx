import { PublishAppData } from '../../../constants/Interfaces'
import { publishApplication } from '../../../services/Contract'
import { addToIPFS } from '../../../services/Ipfs'
import {
    PUBLISH_START,
    PUBLISH_FAILURE,
    PUBLISH_SUCCESS,
} from '../../actionTypes/Publish/Types'
//Get customer property info by id
export function publishApp(data: PublishAppData) {
    //Return dispatch
    return async (dispatch: any, getState: any) => {
        const state = getState();
        //Dispatch start
        dispatch(publishStart())
        //Send properties get request
        try {

            /***
             * publish
             *  name: string,
    tagLine: string,
    description: string,
    icon: File | ApiDataFile
    apk: File | ApiDataFile,
    images: File | ApiDataFile
             * 
             */

            /**
             * publish on IPFS
             */
            
            // const appIdObject = {
            //     name: data.name,
            //     tagLine: data.tagLine,
            //     description: data.description,
            //     icon: appIcon
            // }
            
            // const appIdResult = await addToIPFS(JSON.stringify(appIdObject))
            // const appId = appIdResult.cid.toString()
            
            const appIconResult = await addToIPFS(data.icon)
            const appIcon = appIconResult.cid.toString()
            const apkResult = await addToIPFS(data.apk)
            const apkFile = apkResult.cid.toString()
            const imagesResult = await addToIPFS(data.images)
            const images = imagesResult.cid.toString()

            const transactionHash = await publishApplication(data.name, data.tagLine, data.description, appIcon, apkFile, "", [images], state)

            //Dispatch success
            dispatch(publishSuccess({transactionHash}))
        } catch (err) {
            console.log("ERR ", err, err.message, err.data)
            //Dispatch failure
            dispatch(publishFail(err.message))
        }
    }
}


//Get customer property basic info by id start
export function publishStart() {
    return {
        type: PUBLISH_START,
        payload: {},
    }
}

//Get customer property basic info by id success
export function publishSuccess(data: any) {
    return {
        type: PUBLISH_SUCCESS,
        payload: { data },
    }
}

//Get customer property basiic info by id failure
export function publishFail(error: any) {
    return {
        type: PUBLISH_FAILURE,
        payload: { error },
    }
}