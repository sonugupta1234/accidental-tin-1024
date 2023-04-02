import { Button, FormLabel, HStack, Input, Select } from '@chakra-ui/react'
import styled from 'styled-components';
import React, { useState } from 'react';
import { addProduct } from '../redux/admin/ProductsReducer/action';
import { useDispatch } from 'react-redux';
// import {useDispatch} from "react-redux"

const initialState={
  images:"",
  brand:"",
  title:"",
  category:"",
  discounted_price:0,
  strike_price:320,
  discount:"",
  size:["x","m","l"],
  rating: 5.2,
  rating_count:"5k"
}
const Admin = () => {
  let [data,setData]=useState(initialState);
  const dispatch= useDispatch()
  

    const handleChange=(e)=> {
      // console.log(e.target.name);
      const {name,value}=e.target

      setData((prev)=> {
        return {...prev,[name]:name=="discounted_price" ? +value:  value}
      })
    }

    const handleSubmit=(e)=> {
      e.preventDefault()
      dispatch(addProduct(data))
      // postProducts(data);
      setData(initialState)
      console.log(data);
  }
  return (
    <Wrapper mt="50px" >
       <form onSubmit={(e)=>handleSubmit(e)}>
        <FormLabel>Image</FormLabel>
        <Input type="url" placeholder='image' name="images" value={data.images} onChange={(e)=>handleChange(e)} />
        <FormLabel>Brand</FormLabel>
        <Input type="text" name="brand" value={data.brand} onChange={(e)=>handleChange(e)}/>
        <FormLabel>Title</FormLabel>
        <Input type="text" name="title" value={data.title} onChange={(e)=>handleChange(e)}/>
        <FormLabel>Category</FormLabel>
        <Input type="text" name="category" value={data.category} onChange={(e)=>handleChange(e)}/>
        <FormLabel>Discounted Price</FormLabel>
        <Input type="number" name="discounted_price" value={data.discounted_price} onChange={(e)=>handleChange(e)}/>
        <FormLabel>Strike Price</FormLabel>
        <Input type="number" name="strike_price" value={data.strike_price} onChange={(e)=>handleChange(e)}/>
        <FormLabel>Discount </FormLabel>
        <Input type="text" name="discount" value={data.discount} onChange={(e)=>handleChange(e)}/>
       <Button type="submit">Add Product</Button>
       </form>
    </Wrapper>
  )
}

const Wrapper=styled.div`
padding:40px;
width:50%;
margin:auto;
`

export default Admin;