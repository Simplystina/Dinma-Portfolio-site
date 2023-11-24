import React from 'react'
import {Box, Button, HStack, Text} from "@chakra-ui/react"
import {BsTwitter, BsGithub, BsLinkedin} from "react-icons/bs"

const HomePage = () => {

    const openMail = ()=>{
        window.location.href = 'mailto:stinachinma@gmail.com'
    }
    



  return (
    <Box p={["30px 20px", "30px"]}>
      <Text
        fontSize={["14px", "16px"]}
        data-aos="fade-down"
        mt="40px"
        mb="30px"
        color="white"
        textAlign={["left", "center"]}
      >
        Hello 👋 , my name is{" "}
      </Text>
      <Text
        textAlign={["left", "center"]}
        fontSize={["16px", "20px", "25px", "30px", "36px"]}
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className="name-effect"
      >
        Chidinma Nwatu.{" "}
        <span
          style={{
            fontStyle: "italic",
            background: "transparent",
            fontFamily: "Brush Script MT, cursive",
            textTransform: "none",
          }}
        >
          fondly called Dinma
        </span>
      </Text>

      <Box className="typing-slider">
        <p>I. am. a. Backend. Developer.</p>
        <p>I. am. a. Frontend. Developer.</p>
        <p>iBuild server and pixel perfect applications</p>
      </Box>
      <Text fontSize={[10, 12, 14]} textAlign={["left", "center"]} color="grey">
        Full Stack Developer | Women in Tech Advocate | Software Engineer
      </Text>
      <HStack
        className="button-container"
        m={["30px 0 10px 0", "40px 0 30px 0"]}
        spacing={[5, 10]}
        justify={["space-between", "center"]}
      >
        <Button
          fontSize={[10, 12, 14, 16]}
          data-aos="fade-up-right"
          data-aos-duration="1000"
          onClick={openMail}
          borderRadius={[5, 10]}
          w={["100px", "150px", "200px"]}
          h="50px"
          bg="transparent"
          border="1px solid #10c6bb"
          color="#10c6bb"
        >
          Get in Touch
        </Button>
        <a
          fontSize={[10, 12, 14, 16]}
          data-aos="fade-up-left"
          data-aos-duration="1000"
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/drive/folders/1nq8zUGil3xba4N1iGV1JAeB81xXcrXmp?usp=sharing"
        >
          <Button
            borderRadius={[5, 10]}
            w={["100px", "150px", "200px"]}
            h="50px"
            fontSize="15px"
            bg="transparent"
            border="1px solid #10c6bb"
            color="#10c6bb"
          >
            Resume
          </Button>
        </a>
      </HStack>
      <HStack
        m={[10, 20]}
        spacing={10}
        fontSize={[20, 30]}
        justify="center"
        color="#10c6bb"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/chidinmaCode"
        >
          <BsTwitter />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Simplystina"
        >
          <BsGithub />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/chidinma-nwatu-7ba6051a2/"
        >
          <BsLinkedin />
        </a>
      </HStack>
    </Box>
  );
}

export default HomePage
