import React from 'react'
import  styled from "styled-components"
import Navbar from './Components/navbar'
import Signin from './Components/Signin'
export const App = () => {
  return (
    <AppBox>
      <Navbar/>
<Signin/>
    </AppBox>
  )
}


const AppBox =styled.div`
background: #E5E5E5;
width: auto;
height: 100vh;

`
export default App
