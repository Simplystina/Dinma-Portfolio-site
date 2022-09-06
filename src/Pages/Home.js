import React,{useEffect} from 'react'
import {Box, Flex, HStack, Text} from "@chakra-ui/react"
import { NavLink, Outlet } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import {AiFillHome} from "react-icons/ai"
import {BsFillFilePersonFill} from "react-icons/bs"
import {FaLaptop} from "react-icons/fa"
import {BiMessageDots} from "react-icons/bi"

const Home = () => {


    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
  return (
    <Box pos="relative" bg="black" h="100vh" overflowX="hidden" overflowY="scroll" >
        <Flex p={["30px 50px", "30px 30px", "30px 80px"]} justifyContent="space-between" borderBottom="1px solid grey" borderTop="2px solid #10c6bb">
            <Text data-aos="zoom-in-up" data-aos-duration="3000" fontSize={[15,20]} className="name_icon">Dinma</Text>
            <HStack className='nav_link_container' display={["none", "Flex"]} data-aos="fade-left" color="#10c6bb" fontSize={[14, 16, 20]} fontWeight="500" spacing={[10,10, 10, 20]}>
                <NavLink className="nav_link" to="/" style={({ isActive }) => ({ borderBottom: isActive? "1px solid white" :"none", color: isActive? "white": "#10c6bb"})}>
                    <Text>Home</Text>
                </NavLink>
                 <NavLink className="nav_link" to="about" style={({ isActive }) => ({  borderBottom: isActive? "1px solid #10c6bb" :"none", color: isActive? "white": "#10c6bb"})}><Text>About</Text></NavLink>
                <NavLink className="nav_link" to="project" style={({ isActive }) => ({  borderBottom: isActive? "1px solid #10c6bb" :"none", color: isActive? "white": "#10c6bb" })}><Text>Projects</Text></NavLink>
                <NavLink className="nav_link" to="contact" style={({ isActive }) => ({  borderBottom: isActive? "1px solid #10c6bb" :"none" , color: isActive? "white": "#10c6bb"})}><Text>Contact</Text></NavLink>
            </HStack>
        </Flex>
        
        <Box  mb="100px">
            <Outlet/>
        </Box>
        <Flex className='footer_navbar' display={["flex", "none"]} pos="fixed" bottom={0} w="100%" p={["20px 20px","20px 50px","20px 80px"]} fontWeight="900" fontSize={[20, 30]} bg="#10c6bb" justifyContent="space-between">
            <NavLink style={({ isActive }) => ({ color: isActive? "black": "white"})} to="/"><AiFillHome/></NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive? "black": "white"})} to="about"><BsFillFilePersonFill/></NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive? "black": "white"})} to="project"><FaLaptop/></NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive? "black": "white"})} to="contact"><BiMessageDots/></NavLink>
        </Flex>
    </Box>
  )
}

export default Home
