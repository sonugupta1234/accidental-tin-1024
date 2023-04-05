import axios from "axios";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  SORTING_FAILURE,
  SORTING_REQUEST,
  SORTING_SUCCESS,
} from "./actionType";

const getProductRequestAction = () => {
  return { type: GET_PRODUCTS_REQUEST };
};
const getProductSuccessAction = (data) => {
  return { type: GET_PRODUCTS_SUCCESS,payload:data };
};
const getProductFailureAction = () => {
  return { type: GET_PRODUCTS_FAILURE };
};

export const getProducts = (params) =>async (dispatch) => {
  // console.log("action")
  dispatch(getProductRequestAction())
  try {
     let data = await axios.get(`https://good-lime-perch-sock.cyclic.app/products/getproducts`,params)
     //   console.log("data:", data )
     dispatch(getProductSuccessAction(data.data))
  } catch (err) {
     dispatch(getProductFailureAction(  ))
  }
}

const sortingRE=()=>{
  return {type:SORTING_REQUEST}; 
}
 const sortingSU=(paylaod)=>{
  return {type:SORTING_SUCCESS,paylaod:paylaod}
 }

 const sortingFE=()=>{
return {type:SORTING_FAILURE}
 }
