import { Box, HStack, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import pic from "../images/tracker-website.JPG"
import {BsFillEyeFill,BsGithub} from "react-icons/bs"
import { data } from './data'


const Projects = () => {
  return (
    <Box p="30px 0" m="20px 100px">
        <Text textAlign="center" fontSize="30px" fontWeight="500" color="#10c6bb">Projects</Text>
        <SimpleGrid data-aos="fade-up" columns={3} m="100px 0 0 0" spacing={10}>
            {
                data?.map((item)=>{
                    const {id, title, content, img, live, github} = item
                    return (
            <Box _hover={{transform: "scale(1.1)", border:"3px solid #0be4d5", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"}} transition="all 0.4s linear" box-shadow= "rgb(38, 57, 77) 0px 20px 30px -10px" p="10px 10px 20px 10px" bg="rgb(23, 42, 69)" borderRadius={30}>
                <Text textTransform="capitalize" textAlign="center" fontSize={25} bg="transparent" color="white" m="10px 0">{title}</Text>
                <Img borderRadius="15px" m="0 auto" w="95%"   src={img} objectFit="cover"/>
                <Text   fontSize={14} m="10px 0" color="white">{content}</Text>
                
                <HStack justify="space-between">
                    <a href={live} target="_blank"><HStack transition="all 0.8s linear" _hover={{paddingLeft: "20px", color:"#059288"}} align="center" color="#10c6bb"><Text>Live</Text><BsFillEyeFill/></HStack></a>
                    <a href={github} target="_blank"><HStack transition="all 0.8s linear" _hover={{paddingRight: "20px", color:"#059288"}} align="center" color="#10c6bb"><Text>Code</Text><BsGithub/></HStack></a>
                </HStack>
            </Box>
                    )
                })
            }
            
        </SimpleGrid>
    </Box>
  )
}

export default Projects
