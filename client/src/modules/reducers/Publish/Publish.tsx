import {
    PUBLISH_START,
    PUBLISH_FAILURE,
    PUBLISH_SUCCESS,
} from '../../actionTypes/Publish/Types'

//Set initial state for owner
const initialState = {
    data: {},
    loading: null,
    error: null,
}

//Export new state using switch
const publishReducer = (state = initialState, action: any = {}) => {
    switch (action.type) {

        case PUBLISH_START:
            return {
                ...state,
                loading: true
            }

        case PUBLISH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data,
            }
        case PUBLISH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
        default:
            return state
    }
}

export default publishReducer