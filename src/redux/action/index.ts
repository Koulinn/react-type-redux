export {}
import requests from "../../lib"


export const genericAction = (payload:any) => ({
    type: 'ADD_COMPANY_TO_FAV',
    payload: payload
})




export const genericGetRequest = (endpoint:string) => {
    return async (dispatch:Function, getState:Function) => {
        try {
            const getStateData:object = getState()
            
            const endpointURL:string = 'string'
            const requestResponse:any = await requests.getRequest(endpointURL)
            if (requestResponse.statusText === 'OK') {
                dispatch({
                    type: 'ADD_RANDOM_DATA',
                    // payload: requestResponse.data.data
                    payload: [{cake:'cakeeeeee'}]
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

}
