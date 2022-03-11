import React from 'react'
import styled from 'styled-components'
import LogoNav from "../../assets/icons/unnamed copy 2.svg"
export const Navbar = () => {
  return (
    <Container>
      <Logo src={LogoNav}/>
      <a href='#' className='navLogo' >
        AK Friends
    </a>
      </Container>
  )
}


const Container = styled.div`
display: flex;
align-items: center;
height: 64px;
background: #21325B;
color: #FFFFFF;
.navLogo{

font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
letter-spacing: -0.04em;

}
a{
margin-left: 17px;
  text-decoration: none;
  color: #FFFFFF;
}


`
const Logo = styled.img`

`
export default Navbar