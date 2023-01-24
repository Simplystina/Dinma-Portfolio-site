import React from 'react'
import { Box, HStack, Text , Button, Center} from '@chakra-ui/react'
import {BsWhatsapp} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"
import {BsTwitter, BsGithub, BsLinkedin} from "react-icons/bs"

const Contact = () => {

   
    const openMail = ()=>{
        window.location.href = 'mailto:stinachinma@gmail.com'
    }

    
      

  return (
    <Box m="20px 20px 100px  20px">
        <Text textAlign="center" fontSize={[20, 25, 30]} fontWeight="500" color="#10c6bb">Get in Touch</Text>
        <Text data-aos="zoom-in" data-aos-duration="2000" textAlign="center" m="40px auto" maxW="700px" fontFamily="FreeMono, monospace" color="white" fontSize={[12, 14]}>Hi, thank you for stopping by. Do you have any project in mind? Come let's make that a reality.
            My inbox is always open for a quick chat, feel free to stop by.
        </Text>
        <a href="https://wa.me/+2348109549798"><HStack data-aos="flip-right" data-aos-duration="2000" mt="60px" mb="40px" color="white" justify="center"><BsWhatsapp fontSize={25} color="#10c6bb"/><Text color="white" fontFamily="FreeMono, monospace">08109549798</Text></HStack></a>
        <HStack data-aos="flip-left" data-aos-duration="2000" color="white" justify="center"><MdLocationOn fontSize={[20, 25, 30]} color="rgb(234, 5, 234)"/><Text color="white" fontFamily="FreeMono, monospace">Lagos, Nigeria</Text> </HStack>
        <Center data-aos="fade-in" data-aos-duration="2000"><Button onClick={openMail} mt={[20,30]} borderRadius={10}  w="200px" h="50px" fontSize={[10, 12, 15]} bg="transparent"  border="1px solid #10c6bb" color="#10c6bb">Get in Touch</Button></Center>
        <HStack   m={[10, 20]} spacing={10} fontSize={[20,30]} justify="center" color="#10c6bb">
                <a href="https://twitter.com/chidinmaCode"><BsTwitter/></a>
                <a href="https://github.com/Simplystina"><BsGithub/></a>
                <a href="https://www.linkedin.com/in/chidinma-nwatu-7ba6051a2/"><BsLinkedin/></a>
         </HStack>
    </Box>
  )
}

export default Contact
