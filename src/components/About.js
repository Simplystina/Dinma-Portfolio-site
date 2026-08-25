import { Box, Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'
import pic from "../images/pic.jpeg"



//fontSize={[12, 14,16]}

//data-aos="fade-left"

//data-aos="fade-right"

//data-aos="fade-up"
const About = () => {
  return (
    <Box mt="20px" mb="100px">
        <Text textAlign="center" fontSize={[20, 25, 30]} fontWeight="500" color="#10c6bb">About me</Text>
        <Flex m={["20px 30px", "20px 50px",null,"20px 100px"]} justifyContent="space-between" flexDir={["column", null,"row", "row"]}>
            <Box  data-aos-easing="ease-out-cubic" data-aos-duration="1000"   boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"  borderRadius={10} h="400px" w={["100%", null, "40%"]}>
                <Img w="100%" borderRadius={10} h="100%" objectFit="cover" src={pic} alt="my_picture"/>
            </Box>
            <Box w={["100%", null, '50%']} color="white" mt={["40px", null, 0]}>
                <Text data-aos="fade-left" data-aos-duration="600" lineHeight="25px" fontSize="14px" fontFamily="DM Sans,sans-serif">
                    I'm a passionate and detail-oriented <Text as="span" fontWeight="bold">fullstack developer with a backend focus</Text> — I enjoy crafting the systems that power great web experiences as much as the pixel-perfect interfaces that bring them to life. My core strength is designing robust APIs, scalable server-side architecture, and reliable data layers, with hands-on experience in <Text as="span" fontWeight="bold">JavaScript, NestJS, and Express.js</Text> (and currently expanding into <Text as="span" fontWeight="bold">Java</Text>). I am also comfortable shipping clean, polished UI when a project calls for it. I enjoy taking complex problems and turning them into well-architected products that solve real user needs.
                </Text>
                <Text data-aos="fade-right" data-aos-duration="600" lineHeight="25px" fontSize="14px" fontFamily="DM Sans,sans-serif" m="20px 0">
                    I'm a Women in Tech advocate. I spend a lot of my time volunteering with organizations — both as a lead and an active contributor — because I believe deeply in giving back to the community and using my technical knowledge to create opportunities for others.
                </Text>
                <Text lineHeight="25px" fontSize="14px" fontFamily="DM Sans,sans-serif">
                  Currently, I'm expanding my backend and systems knowledge further, so I can contribute to more ambitious projects and compete globally.
                </Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default About
