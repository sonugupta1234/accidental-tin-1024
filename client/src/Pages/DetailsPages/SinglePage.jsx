import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import {MdLocalShipping} from "react-icons/md"; 
import axios from "axios";
import { useParams } from "react-router-dom";

let size = ["S", "M", "L", "XL", "XXL"];
const SinglePage = () => {
  const [data,setData]=useState({})
const {id}=useParams();


  const SinglepageData=async(id)=>{
    try{
      const singledata=await axios.get(`https://good-lime-perch-sock.cyclic.app/products/getproducts/${id}`)
      console.log(singledata.data.product)
      setData(singledata.data.product)
    }catch(err){
      console.log(err)
    }
  }
useEffect(()=>{ 
  SinglepageData(id)
},[])

    return (
    <>
    
        <Box
          // borderWidth={'1px'}
          bgColor={"#fff"}
          w={{ base: "97%", md: "", lg: "70%" }}
          mt="80px"
          ml="auto"
          mr="auto"
          display={"grid"}
          gridTemplateColumns={{
            lg: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            base: "repeat(1,1fr)",
          }}
          gap={{ lg: "10px" }}
        >
          <Box borderWidth={"2px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image
              p={"5px"}
              w="100%"
              borderRadius={"10px"}
              src={data.images}
            />
          </Box>
          <Box borderWidth={"2px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Box w="90%" m="auto">
              <Text
                color={"gray.400"}
                mt="10px"
                fontSize={"23px"}
                fontWeight="400"
              >
               {data.title}
              </Text>
              <Flex fontWeight={"500"} mt="20px" align={"center"} gap="20px">
                <Text>Rs {data.discounted_price}</Text>
                <Text
                  fontSize={"13px"}
                  color={"gray"}
                  fontWeight={300}
                  textDecoration={"line-through"}
                >
                  Rs{data.strike_price}
                </Text>
                <Text color={"red.200"}>{data.discount}</Text>
              </Flex>
              <Text
                fontWeight={"500"}
                color={"green.500"}
                mt="20px"
                mb={"20px"}
              >
                inclusive of all taxes
              </Text>
              <hr style={{ border: "1px solid gray" }} />
              <Text mt="10px" fontWeight={400} fontSize={"20px"}>
                {"Select Size"}
              </Text>
              <Flex gap="20px" mt="20px" mb="20px">
                {size.map((elem) => {
                  return (
                    <Button p="0px" borderRadius={"50%"} bgColor={'#fff'} borderWidth={'2px'} w='11%' h='50px'>
                      {elem}
                    </Button>
                  );
                })}
              </Flex>
              <hr style={{ border: "1px solid gray" }} />
             <Text mt="10px" fontWeight={400} fontSize={"20px"}>{"Product Details"}</Text>
             
             <Text p="10px 0 10px 0">Category : {data.category}</Text>
             <Text p="10px 0 10px 0">Brand : {data.brand}</Text>
             {/* <Text p="10px 0 10px 0">Category : {"women kurta Ser Wiath Dupatta"}</Text> */}
             <Text p="10px 0 10px 0" >Review: {data.rating_count}</Text>
             <Text p="10px 0 10px 0">Rating : {data.rating}</Text>

             
             <hr style={{ border: "1px solid gray" }} />
             <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            mb={{md:"20px",base:"20px"}}
            bgColor='red.300'
            color={'white'}
            borderRadius={'5px'}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
              bgColor:'red.300'
            }}>
            Add to cart
          </Button>
          <Stack direction="row" alignItems="center" justifyContent={'center'}>
          <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
            </Box>
          </Box>
        </Box>
    </>
  );
};

export default SinglePage;
