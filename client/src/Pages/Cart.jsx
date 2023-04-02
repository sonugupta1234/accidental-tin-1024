import React, { useState } from 'react'
import {Box,Flex,Text,Button, Heading, Image} from "@chakra-ui/react"
import {CiDeliveryTruck, CiShoppingTag} from "react-icons/ci"
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from "axios"
import Navbar from "../Components/Navbar"
import { Link } from 'react-router-dom'

export const Cart = () => {

    const [data,setData]=useState({})
    const {id}=useParams()


    // useEffect(()=>{
    //   axios.get(`https://good-lime-perch-sock.cyclic.app/products/getproducts/${id}`)
    //   .then((res)=>setData(res.data.product))
    //   .catch((err)=>console.log(err))
    // },[id])
  return (
    <>
    <Navbar />
    <Box mt={70}  >
        <Flex>
            <Box width="60%"  >
                <Box width="70%" margin="auto" >
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

               <Box mt={6}>
                 <Flex>
                    <Box  width="30%" >
                        <Image width="100%" src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg" alt=""/>
                    </Box>

                    <Box >
                        <Heading>Roadster</Heading>
                        <Text>Shirt</Text>
                        <Text>Size: 32</Text>
                        <Flex>
                            <Text>₹ 1000</Text>
                            <Text textDecoration="line-through" ml={7} color="#FF3F6C">₹ 2500 </Text>
                            <Text color="#FF3F6C" ml={3}>20% off</Text>
                        </Flex>
                        <Text>14 days return available</Text>
                    </Box>
                 </Flex>
               </Box>

               </Box>
            </Box>
            <Box width="40%" >
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
                    <Text>₹ 1000</Text>
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
                    <Text>₹ 700</Text>
                    </Flex>
                </Box>
                <Link to="/checkout/address"><Button width="50%" margin="auto" left="30%" mt={8} backgroundColor="#FF3F6C" _hover={{backgroundColor: "#FF3F6C"}}>PLACE ORDER</Button></Link>
              </Box>
            </Box>
        </Flex>
    </Box>
    </>
  )
}
