import { createAction } from '@reduxjs/toolkit'

function withPayloadType<T>() {
   return (t: T) => ({ payload: t })
}

export const apiCallBegan = createAction('api/callBegan', withPayloadType<any>())
export const apiCallSuccess = createAction('api/callSuccess', withPayloadType<any>())
export const apiCallFailed = createAction('api/callFailed', withPayloadType<any>())
