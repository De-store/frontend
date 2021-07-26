import {
    GET_FILES_START,
    GET_FILES_FAILURE,
    GET_FILES_SUCCESS,
} from '../../actionTypes/Profile/Types'

//Set initial state for owner
const initialState = {
    files: [],
    loading: true,
    error: null,
}

//Export new state using switch
const homeReducer = (state = initialState, action: any = {}) => {
    switch (action.type) {

        case GET_FILES_START:
            return {
                ...state,
                loading: true
            }

        case GET_FILES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                files: action.payload.files,
            }
        case GET_FILES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
        default:
            return state
    }
}

export default homeReducer