import { PRODUCT_FAILURE, PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS } from "./actionTypes"

const initialState = {
  isLoading: false,
  isError: false,
  products: [], 
}

const reducer = (state=initialState, {type,payload})=> {
    switch(type){
        case PRODUCT_REQUEST :
            return {...state,isLoading:true,isError:false}
        case GET_PRODUCT_SUCCESS :
            return {...state,isLoading:false,products:payload}
        case POST_PRODUCT_SUCCESS :
            return {...state,isLoading:false}
        case PRODUCT_FAILURE :
                return {...state,isError:false}
        default :
        return state
            
    }
}

export {reducer}