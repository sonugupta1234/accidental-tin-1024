import React, { useState } from 'react'
import {Box,Heading,Text,Flex,Button,Input, useToast} from "@chakra-ui/react"

export const Payment = () => {

    const [cash,setCash]=useState(false)
    const [card,setCard]=useState(false)
    const toast=useToast()

    const handleSubmit=()=>{
        setCash(false)
        setCard(true)
    }

    const handleSubmit1=()=>{
        setCash(true)
        setCard(false)
    }
  return (
    <Box width="100%" marginTop={150}>
        <Flex>
       <Box width="60%" margin="auto">
          <Box>
            <Heading fontSize={'sm'}>Bank Offer</Heading>
            <Text>. Get up to Rs 500 Cashback on CRED Pay UPI on a min spend of Rs 1000.TCA</Text>
          </Box>

          <Box marginTop={50}>
            <Heading fontSize={'sm'}>Choose Payment Mode</Heading>
            <Flex>
                <Box width="40%">
                <Button onClick={handleSubmit1} color="#FF3F6C">Cash On Delivery(Cash/UPI)</Button>
                <Button color="#FF3F6C" onClick={handleSubmit}>Credit/Debit Card</Button>
                <Button color="#FF3F6C">PhonePe/Google Pay/BHIM UPI</Button>
                <Button color="#FF3F6C">Paytm/Wallets</Button><br/>
                <Button color="#FF3F6C">Net Banking</Button><br/>
                <Button color="#FF3F6C">EMI/Pay Later</Button>
                </Box>
                <Box width="60%">
                  {cash && 
                  <>
                    <Heading fontSize={'sm'}>Cash On Delivery (Cash/UPI)</Heading>
                    <Button mt={6}>56533</Button>
                    <Input placeholder="Enter code shown in above image" mt={6}/>
                    <Button width="100%" backgroundColor="#FF3F6C" mt={10} onClick={()=>toast({
                  title: 'Order Placed',
                  position: 'top',
                  description: "We've sent confirmation message to your mail",
                 status: 'success',
                 duration: 5000,
                 isClosable: true,
      })}>PLACE ORDER</Button>
                  </>
                  }
                  {card && 
                  <>
                    <Heading fontSize={'sm'}>CREDIT/DEBIT CARD</Heading>
                    <Text>Please ensure your card can be used for online transactions</Text>
                    <Input placeholder="Card Number" mt={6}/>
                    <Input placeholder="Name on card" mt={6} />
                    <Input placeholder="Valid Thru (MM/YY)" mt={6}/>
                    <Button width="100%" backgroundColor="#FF3F6C" _hover={{backgroundColor: "#FF3F6C"}} mt={10} onClick={()=>toast({
                  title: 'Order Placed',
                  position: 'top',
                  description: "We've sent confirmation message to your mail",
                 status: 'success',
                 duration: 5000,
                 isClosable: true,
      })}>PAY NOW</Button>
                  </>
                  }
                </Box>
            </Flex>
          </Box>
       </Box>
       <Box width="30%">
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
