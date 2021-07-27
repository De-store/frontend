import { combineReducers } from 'redux'
import profile from './modules/reducers/Profile/Profile'
import publish from './modules/reducers/Publish/Publish'
import contract from './modules/reducers/SetContract'

export default combineReducers({
    profile,
    publish,
    contract,
})
