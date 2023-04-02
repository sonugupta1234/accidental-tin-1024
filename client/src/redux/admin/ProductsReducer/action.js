import axios from "axios";
import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes";
// import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes";

export const getproductssuccess = (payload) => {
return {type:GET_PRODUCT_SUCCESS,payload}
}
export const postproductssuccess = () => {
return {type:POST_PRODUCT_SUCCESS}
}

export const productrequest = () => {
return {type:PRODUCT_REQUEST}
}

export const productFailure = () => {
return {type:PRODUCT_FAILURE}
}
// export const getproducts = (dispatch) => {

//   dispatch(productrequest())
//   return axios.get(`http://localhost:8000/products`).then((res)=> {
//     // console.log(res.data);
//     // console.log(1);
//     dispatch({type:GET_PRODUCT_SUCCESS, payload:res.data})
//   }).catch((err)=> {
//     dispatch({type:PRODUCT_FAILURE})
//   })
// };

export const addProduct = (payload) => (dispatch) => {

    dispatch(productrequest())
     axios.post(`https://good-lime-perch-sock.cyclic.app/products/create`,payload).then(()=> {
      // console.log(res.data);
    //   console.log(1);
      dispatch(postproductssuccess())
    }).catch((err)=> {
      dispatch(productFailure())
    })
  };