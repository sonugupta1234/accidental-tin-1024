import { Box, Button, Flex, Image, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import {AiOutlineHeart} from "react-icons/ai"
import React from "react";

const ProductsCard = ({
  images,
  title,
  brand,
  strike_price,
  rating,
  rating_count,
  discount,
  discounted_price,
}) => {
  return (
    <Box
      _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      borderRadius={"5px"}
      pb='10px'
    >
      <Link to="">
        <Image src={images} w="100%" borderRadius={"5px 5px 0 0"} />
        <Box paddingLeft={"7px"}>
          <Text fontWeight={500}>{brand}</Text>
          <Text color={"gray"} fontSize={"13px"}>
            {title}
          </Text>
          <Flex alignItems={"center"} gap="10px">
            <Text fontWeight={500}>Rs.{strike_price}</Text>
            <Text
              color={"gray"}
              fontSize={"11px"}
              textDecoration={"line-through"}
            >
              Rs.{discounted_price}
            </Text>{" "}
            <Text fontSize={"11px"} color={"red.200"}>
              {discount}
            </Text>
          </Flex>
          <Flex
            gap="5px"
            fontWeight={500}
            fontSize={"12px"}
            alignItems="center"
          >
            {" "}
            <Text display={'flex'} alignItems='center' gap='3px'>
              {rating}
              <StarIcon color={"green"} />
            </Text>
            | <Text>{rating_count}k</Text>
          </Flex>
          <Button bgColor={'pink'} borderRadius="2px" w={'96%'}  mt='5px' gap='10px' fontSize={'13px'}><AiOutlineHeart size="18px"/>WISHLIST</Button>
        </Box>
      </Link>
    </Box>
  );
};

export default ProductsCard;


