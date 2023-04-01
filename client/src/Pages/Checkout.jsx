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

export const Checkout = () => {
  const toast=useToast()
  
  return (
    <Box marginTop="100px">
        <Flex>
            <Box width="40%"  ml={60}>
                <Box width="100%" height="500px" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" margin="auto" >
                    <FormControl style={{width: "90%", marginLeft: "17px"}} isRequired>
                        <FormLabel>CONTACT DETAILS</FormLabel>
                        <Input placeholder="Name" alt=""/>
                        <Input placeholder="Mobile No" alt=""/>

                        <FormLabel>ADDRESS</FormLabel>
                        <Input placeholder="Pin Code" alt=""/>
                        <Input placeholder="Address(House No, Building, Street, Area)" alt=""/>
                        <Input placeholder="Locality/Town" alt=""/>
                        <Input placeholder="City/District" alt=""/>
                        <Input placeholder="State" alt=""/>
                        
                        <Checkbox>Make this my default address</Checkbox><br/>
                        
                        <Button mt={8}  width="100%" backgroundColor={"#FF3F6C"} _hover={{backgroundColor: "#FF3F6C"}} onClick={()=>toast({
        title: 'Added Sucessfully',
        position: 'top',
        description: "We've added your address Sucessfully",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })}>ADD ADDRESS</Button>
                        
                    </FormControl>
                </Box>

            </Box>
            <Box width="30%" ml={15}>
            <Heading fontSize="sm">PRICE DETAILS</Heading>
                <Box mt={6}>
                    <Flex justifyContent="space-between">
                    <Text>Total MRP</Text>
                    <Text>₹ 664</Text>
                    </Flex>
                </Box>
                <Box mt={6}>
                    <Flex justifyContent="space-between">
                    <Text>Discount on MRP</Text>
                    <Text>-₹ 300</Text>
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
                    <Text>₹ 364</Text>
                    </Flex>
                </Box>
                
            </Box>
        </Flex>
    </Box>
  )
}
