import React,{Component} from 'react'

import styled from "styled-components"
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Home/navbar'
import { sidebar } from '../cssFonts/Sidebar'
import Signin from '../Components/Signin'
import Home from '../Components/Home/home'
export const Root = () => {
  return (
  <Router>
    <Container>
        <Navbar/>
        <Sidebar/>
        <Home/>

    </Container>
     </Router>
  )
}
const Container = styled.div`

display: flex;
flex-direction: column;
background-color: #e5e5e5;
`

export default Root