import { Box, Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'
import pic from "../images/Pic.jpg"



//fontSize={[12, 14,16]}

//data-aos="fade-left"

//data-aos="fade-right"

//data-aos="fade-up"
const About = () => {
  return (
    <Box mt="20px" mb="100px">
        <Text textAlign="center" fontSize={[20, 25, 30]} fontWeight="500" color="#10c6bb">About me</Text>
        <Flex m={["20px 30px", "20px 50px",null,"20px 100px"]} justifyContent="space-between" flexDir={["column", null,"row", "row"]}>
            <Box  data-aos-easing="ease-out-cubic" data-aos-duration="1000"   boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"  borderRadius={10} h="400px" w={["100%", null, "35%"]}>
                <Img w="100%" borderRadius={10} h="100%" objectFit="cover" src={pic} alt="my_picture"/>
            </Box>
            <Box w={["100%", null, '50%']} color="white" mt={["40px", null, 0]}>
                <Text data-aos="fade-left" data-aos-duration="2000" lineHeight="25px" fontSize="14px" fontFamily="DM Sans,sans-serif">
                    I am a passionate and enthusiastic software developer who enjoys creating things that live on the web. 
                   I'm a web developer with experience focused on crafting great web experiences with pixel 
                   perfect design and also building the server side of applications. I enjoy taking complex problem and turning them into amazing products that helps to solve users problems.
                  I enjoy the process of creation and constantly learning better ways of doing things everyday.
                </Text>
                <Text data-aos="fade-right" data-aos-duration="2000" lineHeight="25px" fontSize="14px" fontFamily="DM Sans,sans-serif" m="20px 0">
                     I'm a woman in tech Advocate. 
                    I love volunteering so I spend alot of my time volunteering with organisations as a lead and as an active contributor. I believe so much in giving back to the
                    community so I'm constantly using my technical knowledge to do that.
                </Text>
                <Text data-aos="fade-up" data-aos-duration="2000" lineHeight="25px" fontSize="14px" fontFamily="DM Sans,sans-serif">
                  Currently I'm on the journey to learning more technologies so I can contribute in more projects and compete globally.
                </Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default About
