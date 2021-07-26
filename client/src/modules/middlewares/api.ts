import { Middleware } from 'redux'
import axios from 'axios'
import * as actions from '../actions/ApiActions'

const api: Middleware = ({ getState, dispatch }) => next => async action => {
   if (action.type !== actions.apiCallBegan.type) return next(action)

   const { url, method, data, onStart, onSuccess, onError } = action.payload

   if (onStart) dispatch({ type: onStart })

   next(action)

   try {
      const response = await axios.request({
         url,
         method,
         data,
         withCredentials: true,
      })

      // Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data })
      // General
      dispatch(actions.apiCallSuccess(response.data))
   } catch (error) {
      // Specific
      if (onError) dispatch({ type: onError, payload: error.message })
      // General
      dispatch(actions.apiCallFailed(error.message))
   }
}

export default api
