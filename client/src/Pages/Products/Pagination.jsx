import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';

const Pagination = ({pageNo, setPageNo}) => {
    const { totalRecord, perPage } = useSelector((state) => state.productReducer);

   let noOfBtn = Math.floor((totalRecord/perPage)+1)
  //  console.log(noOfBtn)

    function pageset(current){
        setPageNo(current)
    }

  return (
    <>
      <Flex   gap="10px" alignItems={'center'} w={{base:"100%",md:"",lg:"20%"}} m={'auto'} fontSize='13px'>
      <Button isDisabled={pageNo===1} onClick={()=>pageset(pageNo-1)}
      >{"<"}Pre</Button>
      <Button>{pageNo}</Button>
      <Button
      onClick={()=>pageset(pageNo+1)}
      isDisabled={pageNo===noOfBtn}
      >Next {">"}</Button>
      </Flex>
    </>
  )
}

export default Pagination
// {Array(noOfBtn).fill("").map((elem, index)=>(<Button key={index} onClick={()=>pageset(index+1)} >{index+1}</Button>))}