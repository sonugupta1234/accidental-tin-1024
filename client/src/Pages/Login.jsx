import React from 'react'
import { useState } from 'react'
import axios from "axios"
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

export const Login = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const toast=useToast()
    const toast1=useToast()

    const payload={
        email: email,
        password: password
    }


    const handleSubmit=()=>{

        axios.post("http://localhost:8000/login", payload)
        .then((res)=> toast({
          title: 'Sucessfull.',
          position: 'top',
          description: "Login Sucessfull",
          status: 'success',
          duration: 5000,
          isClosable: true,
        }))
        .catch((error)=> toast1({
          title: ' Error ',
          position: 'top',
          description: 'User not exists , please Register',
          status: 'error',
          duration: 5000,
          isClosable: true,
        }))
  
         
      }
  return (
    <Box style={{width: "25%", textAlign: 'center', margin: 'auto'}}>
    <Heading>SignIn</Heading>
    <FormControl isRequired>
      <FormLabel>Email</FormLabel>
      <Input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
      <FormLabel>Password</FormLabel>
      <Input type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
      <Button mt={7} onClick={handleSubmit}>Submit</Button>
    </FormControl>
  </Box>
  )
}
