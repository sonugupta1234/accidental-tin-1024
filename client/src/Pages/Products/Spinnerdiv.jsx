    import React from 'react'

    import {Box,Spinner} from "@chakra-ui/react";

    const Spinnerdiv = () => {
      return (
        <Box width={"100%"} ml={{base:"50%",md:"150%",lg:'200%'}} mt={{base:"50%",lg:'130%'}} mb={{base:"300%",lg:'200%'}} >
            <Spinner
               thickness='4px'
               speed='0.65s'
               emptyColor='gray.200'
               color='blue.500'
               size='xl'
             />
        </Box>
      )
    }
    
    export default Spinnerdiv
    