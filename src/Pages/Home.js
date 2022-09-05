import React,{useEffect} from 'react'
import {Box, Button, ButtonGroup, Flex, HStack, Text} from "@chakra-ui/react"
import {BsTwitter, BsGithub, BsLinkedin} from "react-icons/bs"
import { NavLink, Outlet } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {


    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
  return (
    <Box bg="black"  h="100vh" overflowY="scroll" >
        <Flex p="20px 80px" justifyContent="space-between" borderBottom="1px solid grey" borderTop="2px solid #10c6bb">
            <Text data-aos="zoom-in-up" data-aos-duration="3000" fontSize={20} className="name_icon">Dinma</Text>
            <HStack data-aos="fade-left" color="#10c6bb" fontSize={20} fontWeight="500" spacing={20}>
                <NavLink className="nav_link" to="/" style={({ isActive }) => ({ borderBottom: isActive? "1px solid white" :"none", color: isActive? "white": "#10c6bb"})}>
                    <Text>Home</Text>
                </NavLink>
                 <NavLink className="nav_link" to="about" style={({ isActive }) => ({  borderBottom: isActive? "1px solid #10c6bb" :"none", color: isActive? "white": "#10c6bb"})}><Text>About</Text></NavLink>
                <NavLink className="nav_link" to="project" style={({ isActive }) => ({  borderBottom: isActive? "1px solid #10c6bb" :"none", color: isActive? "white": "#10c6bb" })}><Text>Projects</Text></NavLink>
                <NavLink className="nav_link" to="contact" style={({ isActive }) => ({  borderBottom: isActive? "1px solid #10c6bb" :"none" , color: isActive? "white": "#10c6bb"})}><Text>Contact</Text></NavLink>
            </HStack>
        </Flex>
        <Outlet/>
    </Box>
  )
}

export default Home
