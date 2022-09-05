import { Center, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import HomePage from './components/HomePage'
import Loader from './components/Loader/Loader'
import Projects from './components/Projects'
import Home from './Pages/Home'

const App = () => {

  const [loading, setLoading] = useState(true)
  setTimeout(
    () => setLoading(false), 
    3000
  );

  if (loading){
    return(
    <Flex w="100%" h="100%" pos="relative" justifyContent="space-between"><Loader/></Flex>
    )
  }
  return (
    <Router>
      <Routes>
        <Route exact={true} path="/" element={<Home/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/project" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
