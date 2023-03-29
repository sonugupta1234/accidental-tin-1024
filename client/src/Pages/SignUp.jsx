import React from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Heading,
    InputGroup,
    InputLeftAddon,
    Button,
    useToast
  } from '@chakra-ui/react'
import { useState } from 'react'
import axios from "axios"


export const SignUp = () => {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const toast=useToast()
    const toast1=useToast()
    
    const payload={
        name: name,
        email: email,
        password: password,
        phone: phone
      }

    const handleSubmit=async()=>{

      axios.post("http://localhost:8000/register", payload)
      .then((res)=> toast({
        title: 'Account created.',
        position: 'top',
        description: "We've created your account for you.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      }))
      .catch((error)=> toast1({
        title: ' Error ',
        position: 'top',
        description: 'User already exists , please Login',
        status: 'error',
        duration: 5000,
        isClosable: true,
      }))

       
    }

  return (
  <Box style={{width: "25%", textAlign: 'center', margin: 'auto'}}>
    <Heading>SignUp</Heading>
    <FormControl isRequired>
      <FormLabel>Name</FormLabel>
      <Input placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
      <FormLabel>Email</FormLabel>
      <Input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
      <FormLabel>Phone</FormLabel>
     <InputGroup>
     
      <InputLeftAddon children='+91' />
      <Input type='number' placeholder='Enter number' onChange={(e)=>setPhone(e.target.value)}/>
     </InputGroup>
     <FormLabel>Password</FormLabel>
      <Input type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
      <Button mt={7} onClick={handleSubmit}>Submit</Button>
    </FormControl>
  </Box>
  )
}
