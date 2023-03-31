import React, { useState } from 'react'
import {Box,Flex,Text,Button, Heading, Image} from "@chakra-ui/react"
import {CiDeliveryTruck, CiShoppingTag} from "react-icons/ci"
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from "axios"

export const Cart = () => {

    const [data,setData]=useState({})
    const {id}=useParams()


    useEffect(()=>{
      axios.get(`http://localhost:8080/products/cart/${id}`)
      .then((res)=>setData(res.data))
      .catch((err)=>console.log(err))
    },[id])
  return (
    <Box mt={150} backgroundColor="#FDEFEC">
        <Flex>
            <Box width="60%" border="1px solid red" >
                <Box width="70%" margin="auto" border="1px solid blue">
                <Flex justifyContent="space-between">
              <Text>Check delivery time & services</Text>
              
                <Button color="#FF3F6C" border="1px solid #FF3F6C">Enter PIN CODE</Button>
               </Flex>

               <Box mt={7}>
                <Heading fontSize="sm">Available Offers</Heading>
                <Text>. Get Upto Rs 500 Cashback on CRED Pay UPI on a min spend of Rs 1000</Text>
               </Box>

               <Box mt={7}>
                <Flex>
               <CiDeliveryTruck fontSize="large"/>
                <Text> Yay! No Convenience fee on this order</Text>
                </Flex>
               </Box>

               <Box>
                 <Flex>
                    <Box>
                        <Image src={data.images} alt=""/>
                    </Box>

                    <Box>
                        <Heading>{data.brand}</Heading>
                        <Text>{data.title}</Text>
                        <Text>Size: {data.size}</Text>
                        <Flex>
                            <Text>₹ {data.discounted_price}</Text>
                            <Text textDecoration="line-through">₹ {data.strike_price}</Text>
                        </Flex>
                        <Text>14 days return available</Text>
                    </Box>
                 </Flex>
               </Box>

               </Box>
            </Box>
            <Box width="40%" border="1px solid green">
              <Text>COUPONS</Text>
              <Box mt={10}>
                <Flex justifyContent="space-between">
                    <Box>
                        <Flex>
                        <CiShoppingTag />
                        <Text>Apply Coupons</Text>
                        </Flex>
                    </Box>

                    <Box>
                        <Button color="#FF3F6C" border="1px solid #FF3F6C">Apply</Button>
                    </Box>
                    

                </Flex>
              </Box>

              <Text>Login to get upto ₹ 200 OFF on first order</Text>

              <Box mt={6}>
                <Heading fontSize="sm">PRICE DETAILS</Heading>
                <Box mt={6}>
                    <Flex justifyContent="space-between">
                    <Text>Total MRP</Text>
                    <Text>₹ {data.discounted_price}</Text>
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
                    <Text>₹ {data.discounted_price}-300</Text>
                    </Flex>
                </Box>
                <Button width="50%" margin="auto" left="30%" mt={8} backgroundColor="#FF3F6C" _hover={{backgroundColor: "#FF3F6C"}}>PLACE ORDER</Button>
              </Box>
            </Box>
        </Flex>
    </Box>
  )
}