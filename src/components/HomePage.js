import React from 'react'
import {Box, Button, ButtonGroup, Flex, HStack, Text} from "@chakra-ui/react"
import {BsTwitter, BsGithub, BsLinkedin} from "react-icons/bs"

const HomePage = () => {

    const openMail = ()=>{
        window.location.href = 'mailto:stinachinma@gmail.com'
    }
    
    let TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


  return (
       <Box p="30px">
            <Text data-aos="fade-down"  mb="30px" color="white" textAlign="center">Hello 👋 , my name is </Text>
            <Text data-aos="zoom-in-up" data-aos-duration="3000" className='name-effect' >Chidinma Nwatu. <span style={{fontStyle: "italic", background:"transparent", fontFamily: 'Brush Script MT, cursive', textTransform:"none"}}>fondly called Dinma</span></Text>
            <Text m="40px" color="#fff" fontWeight="600" fontSize="25px" textAlign="center" className="typewrite" data-period="2000" data-type='[ "iCode . iDesign . iCreate .", "I implement beautiful designs.", "I develop apps", "I create beautiful things" ]'>
                <span class="wrap"></span>
            </Text>
            <Text fontSize={14} textAlign="center" color="grey" >Frontend Developer | Women in Tech Advocate | Software Engineer</Text>
            <HStack m="70px 0 10px 0" spacing={10} justify="center">
                <Button data-aos="fade-up-right" data-aos-duration="1000"  onClick={openMail} borderRadius={10} w="200px" h="50px" fontSize="15px" bg="transparent"  border="1px solid #10c6bb" color="#10c6bb">Get in Touch</Button>
                <a data-aos="fade-up-left" data-aos-duration="1000"  target="_blank"  href="https://drive.google.com/file/d/14iTdeZDSTgQG0t0urYgRRkUVngqquAvb/view?usp=sharing"><Button borderRadius={10}  w="200px" h="50px" fontSize="15px" bg="transparent"  border="1px solid #10c6bb" color="#10c6bb">Resume</Button></a>
            </HStack> 
            <HStack pos="fixed" bottom={5} left="0" right="0" m="20px" spacing={10} fontSize={30} justify="center" color="#10c6bb">
                <a href="https://twitter.com/chidinmaCode"><BsTwitter/></a>
                <a href="https://github.com/Simplystina"><BsGithub/></a>
                <a href="https://www.linkedin.com/in/chidinma-nwatu-7ba6051a2/"><BsLinkedin/></a>
            </HStack>
        </Box>
  )
}

export default HomePage
