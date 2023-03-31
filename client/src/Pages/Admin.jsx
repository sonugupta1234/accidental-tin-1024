import { Box, Button, FormLabel, HStack, Input, Radio, RadioGroup } from '@chakra-ui/react'
import styled from 'styled-components';
import React from 'react';


const Admin = () => {

    const handleSubmit=(e)=> {
        e.preventDefault()
        console.log(1);
    }
  return (
    <Wrapper>
        <Box fontSize={40}>Admin Page</Box>
       <form onSubmit={(e)=>handleSubmit(e)}>
        <FormLabel>Image</FormLabel>
        <Input type="url" />
        <FormLabel>Brand</FormLabel>
        <Input type="text" />
        <FormLabel>Price</FormLabel>
        <Input type="number" />
        <FormLabel>Description</FormLabel>
        <Input type="text" />
        <FormLabel>Select Gender</FormLabel>
        <RadioGroup defaultValue='Itachi'>
    <HStack spacing='24px'>
      <Radio value='male'>Men</Radio>
      <Radio value='female'>Women</Radio>
      <Radio value='kids'>Kids</Radio>
    </HStack>
  </RadioGroup>
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

export default Admin