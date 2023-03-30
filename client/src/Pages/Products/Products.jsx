import {
  Box,
  Checkbox,
  Input,
  Radio,
  RadioGroup,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Products = () => {
  const [value, setValue] = useState("1");
  return (
    <>
      <Box w={{ base: "100%", md: "100%", lg: "100%" }}>
        <Box m="4% auto 0.5% auto" w={{ base: "98%", md: "95%", lg: "95%" }}>
          <Box display={"flex"} alignItems="center">
            <Text>Home/</Text>
            <Text fontWeight={500}>Clothings & Apparels</Text>
          </Box>
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"space-between"}
            mt={{ lg: "30px" }}
          >
            {" "}
            <Text>FILTERS</Text>{" "}
            <Select w={"15%"} borderRadius="0px">
              <option value="">Sort by:-</option>
              <option value="">Recommended</option>
              <option value="">What,s New</option>
              <option value="">Popularity</option>
              <option value="">Better Discount</option>
              <option value="">Price: Hight to Low</option>
              <option value="">Price: Low to High</option>
              <option value="">Customer Rating</option>
            </Select>
          </Box>
        </Box>
        {/* ================================ */}
        <Box>
          <Box background={"#fff"} width="15%" h={"auto"} borderWidth={"1px"}>
            {/* ================men women boys girls ================= */}
            <RadioGroup 
              onChange={setValue}
              value={value}
              display={"flex"}
              flexDirection="column"
              borderWidth={"1px"}
              fontWeight={"500"}
              p={"20px"}
            >
              <Radio m={"5px"}>Men</Radio>
              <Radio m={"5px"}>Women</Radio>
              <Radio m={"5px"}>Boys</Radio>
              <Radio m={"5px"}>Girls</Radio>
            </RadioGroup>
            {/* =================category================ */}
            <Box
              display={"flex"}
              flexDirection="column"
              borderWidth={"1px"}
              p={"20px"}
            >
              <Text fontWeight={"500"} mb={"15px"}>
                CATEGORIES
              </Text>
              <Checkbox value={""}> Tshirts</Checkbox>
              <Checkbox value={""}> Sarees</Checkbox>
              <Checkbox value={""}> Shirts</Checkbox>
              <Checkbox value={""}> Dresses</Checkbox>
              <Checkbox value={""}> Kurtas</Checkbox>
              <Checkbox value={""}> Tops</Checkbox>
              <Checkbox value={""}> Kurta Sets</Checkbox>
              <Checkbox value={""}> Sweatshirts</Checkbox>
              <Text color={"red.400"} cursor={"pointer"}>
                +81 more
              </Text>
            </Box>
            {/* =========== BRAND =============== */}
            <Box
              display={"flex"}
              flexDirection="column"
              borderWidth={"1px"}
              p={"20px"}
            >
              <Text fontWeight={"500"} mb={"15px"}>
              BRAND
              </Text>
              <Checkbox value={""}> KALINI</Checkbox>
              <Checkbox value={""}> Roadster</Checkbox>
              <Checkbox value={""}> H&M</Checkbox>
              <Checkbox value={""}> Pothys</Checkbox>
              <Checkbox value={""}> Mitera</Checkbox>
              <Checkbox value={""}> max</Checkbox>
              <Checkbox value={""}> HERE&NOW</Checkbox>
              <Checkbox value={""}> GRACIT</Checkbox>
              <Text color={"red.400"} cursor={"pointer"}>
                +3204 more
              </Text>
            </Box>
            {/* ====================PRICE======================== */}
            <Box
              display={"flex"}
              flexDirection="column"
              borderWidth={"1px"}
              p={"20px"}
            >
              <Text fontWeight={"500"} mb={"15px"}>
             PRICE
              </Text>

              <Checkbox value={""}> Rs.89 to Rs.13817</Checkbox>
              <Checkbox value={""}> Rs.13817 to Rs.27545</Checkbox>
              <Checkbox value={""}> Rs.27545 to Rs.41273</Checkbox>
              <Checkbox value={""}> Rs.41273 to Rs.55001</Checkbox>
            </Box>
            {/* ================COLOR===================== */}
            <Box
              display={"flex"}
              flexDirection="column"
              borderWidth={"1px"}
              p={"20px"}
            >
              <Text fontWeight={"500"} mb={"15px"}>
                COLOR
              </Text>
              <Checkbox value={""}>Blue</Checkbox>
              <Checkbox value={""} > Black</Checkbox>
              <Checkbox value={""} colorScheme="pink"> Pink</Checkbox>
              <Checkbox value={""} > Navy Blue</Checkbox>
              <Checkbox value={""}colorScheme="green"> Green</Checkbox>
              <Checkbox value={""} colorScheme="gray"> White</Checkbox>
              <Checkbox value={""}colorScheme="red"> Red</Checkbox>
        
              <Text color={"red.400"} cursor={"pointer"}>
                +39 more
              </Text>
              </Box>
               {/* =============================Discount prices========================== */}
               <Box
              display={"flex"}
              flexDirection="column"
              borderWidth={"1px"}
              p={"20px"}
            >
              <Text fontWeight={"500"} mb={"15px"}>
                DISCOUNT RANGE
              </Text>
              <Radio value={''}> 10% and above</Radio>
               <Radio value={''}> 20% and above</Radio>
               <Radio value={''}> 30% and above</Radio>
               <Radio value={''}> 40% and above</Radio>
               <Radio value={''}> 50% and above</Radio>
               <Radio value={''}> 60% and above</Radio>
               <Radio value={''}> 70% and above</Radio>
               <Radio value={''}> 80% and above</Radio>
               <Radio value={''}> 90% and above</Radio>
              </Box>
               {/* ==========================DELIVERY TIME==================== */}
               <Box
              display={"flex"}
              flexDirection="column"
              borderWidth={"1px"}
              p={"20px"}
              color="gray"
            >
              <Text color="black"fontWeight={"500"} mb={"15px"}>
              DELIVERY TIME
              </Text>
                <Input placeholder="Update delivery pincode here" fontSize={"11px"}/>
                <Radio value={""} >By Tomarrow</Radio>
                <Radio value={""} >Within 2 Days</Radio>
                <Radio value={""} >Within 3 Days</Radio>
                <Radio value={""} >Within 4 Days</Radio>
                <Text fontSize={"11px"}>Estimated fastest delivery time. Refer to actual delivery time in Bag.</Text>

              </Box>
              {/* ===================== */}
          </Box>

          <Box></Box>
        </Box>
      </Box>
    </>
  );
};

export default Products;

// background:#fff;
// width: 15%;
// height: 100vh;
// position: fixed;
// top: 0;
// padding-left: 2%;
// padding-top: 80px;
