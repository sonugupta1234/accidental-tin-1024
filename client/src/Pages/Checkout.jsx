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
    Checkbox
  } from '@chakra-ui/react'

export const Checkout = () => {
  return (
    <Box marginTop="100px">
        <Flex>
            <Box width="50%" border="1px solid green" ml={60}>
                <Box width="100%" height="500px" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" margin="auto" border="1px solid red">
                    <FormControl style={{width: "90%", marginLeft: "17px"}}>
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
                        
                        <Button mt={8} left="30%" width="50%">ADD ADDRESS</Button>
                        
                    </FormControl>
                </Box>

            </Box>
            <Box width="50%">

            </Box>
        </Flex>
    </Box>
  )
}
