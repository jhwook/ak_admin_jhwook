import React from 'react'
import styled from 'styled-components';

export const Signin = () => {
  return (
    <Container>
        <p className='title'>Welcome back</p>
    </Container>
  )
}
const  Container= styled.div`
display: flex;
justify-content: center;
align-items: center; 
width: 456px;
height: 430px;
border: 1px solid red;
.title{
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 45px;
/* identical to box height */
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

color: #353535;

}
`
export default Signin;