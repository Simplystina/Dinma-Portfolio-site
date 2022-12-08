import crypto from "../images/crypto-website.JPG"
import debtfix from "../images/debtfix-website.JPG"
import github from "../images/github-users-website.JPG"
import gpt3 from "../images/gp3-website.JPG"
import movie from "../images/movie-website.JPG"
import space from "../images/space-tourism-website.JPG"
import tracker from "../images/tracker-website.JPG"
import amnid from "../images/amnid-website.JPG"

export const data = [
    {
        id: "1",
      title :"Tracker" ,
      img:tracker,
      content :`A valuable tool to analyse submitted 
      applications that help users save and keep track 
      of their pending job applications.`,
      github:"https://github.com/Simplystina/tracker-app",
      live:"https://tracker-webapp.netlify.app/",
      tools: `React + CSS + API's`
    },
    {
      id: "2",
    title :"AmNiD" ,
    img:amnid,
    content :`AmNiD is an online platform that utilizes the identity pass API to guarantee the security of online transactions, by making it possible for customers to have their identity verified, for customers to search for verified vendors using the vendor's unique id and be able to rate a vendor and give reviews.`,
    github:"https://github.com/Simplystina/Prembly-Hack-AmNiD-App",
    live:"https://amnid.vercel.app/",
    tools: `Next js + Chakra UI + Flask, using PostgreSQL as its database`
  },
    {
        id: "3",
        title :"Space Tourist Website" ,
        img: space,
        content :`A space tourist website for space travellers.
         It was built with react CSS and AOS for animation.`,
        github:"https://github.com/Simplystina/space-tourist-project",
        live:"https://space-tourism-webapp.netlify.app/",
        tools: `React + AOS + CSS`
      },
      
      {
        id:"4",
        title: "Debtfix",
        img: debtfix,
        content:"A debt managing app that helps users to manage their debt",
        live:"https://debtfix.netlify.app/",
        github: "https://github.com/Simplystina/AWI-Hackathon",
      },

    {
        id:"5",
        title: "Movie App",
        img: movie,
        content: `A fully responsive web application for finding and saving information about your favorite movies and TV shows.`,
        live: "https://movio-webapp.netlify.app/",
        github: "https://github.com/Simplystina/movie-website"
    },
    {
        id: "6",
        title: "GP3 AI",
        img: gpt3,
        content: "The landing page of a gp3 AI website",
        live: "https://gp3-site.netlify.app/",
        github: "https://github.com/Simplystina/Gp3AI-project",
    },
    {
      id: "7",
      title:"Github Users App",
      img: github,
      content:`A web app that displays github details of
      any username entered1`,
      github: "https://github.com/Simplystina/github-users-app",
      live:"https://githubappusers.netlify.app/",
      tools:"Auth0 + React + CSS"
    },
    {
        id: "8",
        title: "Cryptoverse",
        img: crypto,
        content: `A webapp that displays recent news about coins in the crypto market`,
        live : "https://crypto-verse-project.netlify.app/",
        github : "https://github.com/Simplystina/CryptoVerse-Project",
    }

]