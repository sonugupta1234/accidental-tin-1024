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
    Flex,
    Text,
    Checkbox,
    useToast
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Checkout = () => {
  const toast=useToast()
  
  return (
    <Box marginTop="100px" >
        <Flex>
            <Box width="40%"  ml={60} >
                <Box width="100%" height="570px" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" marginRight="100px" >
                    <FormControl style={{width: "90%", marginLeft: "17px"}} isRequired>
                        <FormLabel pt={10}>CONTACT DETAILS</FormLabel>
                        <Input placeholder="Name" alt=""/>
                        <Input mt={3} placeholder="Mobile No" alt=""/>

                        <FormLabel mt={3}>ADDRESS</FormLabel>
                        <Input mt={3} placeholder="Pin Code" alt=""/>
                        <Input mt={3} placeholder="Address(House No, Building, Street, Area)" alt=""/>
                        <Input mt={3} placeholder="Locality/Town" alt=""/>
                        <Input mt={3} placeholder="City/District" alt=""/>
                        <Input mt={3} placeholder="State" alt=""/>
                        
                        <Checkbox>Make this my default address</Checkbox><br/>
                        
                        <Link to="/checkout/payment"><Button mt={8}  width="100%" backgroundColor={"#FF3F6C"} _hover={{backgroundColor: "#FF3F6C"}} onClick={()=>toast({
        title: 'Added Sucessfully',
        position: 'top',
        description: "We've added your address Sucessfully",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })}>ADD ADDRESS</Button></Link>
                        
                    </FormControl>
                </Box>

            </Box>
            <Box width="30%" ml={40}>
            <Heading fontSize="sm">PRICE DETAILS</Heading>
                <Box mt={6}>
                    <Flex justifyContent="space-between">
                    <Text>Total MRP</Text>
                    <Text>₹ 2500</Text>
                    </Flex>
                </Box>
                <Box mt={6}>
                    <Flex justifyContent="space-between">
                    <Text>Discount on MRP</Text>
                    <Text>-₹ 1500</Text>
                    </Flex>
                </Box>
                <Box mt={6}>
                    <Flex justifyContent="space-between">
                    <Text>Convenience Fee</Text>
                    <Text>FREE</Text>
                    </Flex>
                </Box>
                <Box mt={6}>
                    <Flex justifyContent="space-between">
                    <Text>Total Amount</Text>
                    <Text>₹ 1000</Text>
                    </Flex>
                </Box>
                
            </Box>
        </Flex>
    </Box>
  )
}
