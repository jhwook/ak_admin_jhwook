import React, { useState } from 'react'
import {Routes, Route,  Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import MemberDetailsTable from './MembrDetailsTable';
import Lend from './Lend'
import Market from './Market'
export const MemberDetails = () => {
 
  <Routes>
  <Route element={MemberDetails} >
  <Route index path='minting' element={<Market/>} />
  <Route path='market' element={<Market/>}/>
  <Route path='lend' element={<Lend/>}  />
  </Route>
</Routes>
  return (
    <Container>
  <LinkCont>
  <Link to='/minting'>Minting</Link>
  <Link to='/market'>Market</Link>
  <Link to='/lend'>Lend</Link>
  </LinkCont>
  <Outlet/>
 <MemberDetailsTable/>


      
    </Container>
  )
}

const LinkCont = styled.div`
display: flex;
`
const CardHead = styled.div`
margin-bottom: 20px;
width: 100%;
height: 44px;
select{
  margin-right: 526px;
  width: 160px;
height: 44px;

background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
}
.data{
  background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
width: 298px;
height: 44px;
margin-right: 14px;
padding: 20px;

}
.search{
  width: 240px;
height: 44px;
  background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
margin-right: 24px;
padding: 20px;

}
.excel{
  border: none;
width: 162px;
height: 44px;
background: #4876EF;
border-radius: 8px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #FFFFFF;

}
`

const Container = styled.div`

  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 44px;
`;
const Card = styled.div`
padding: 50px;
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1526px;
  height: 734px;`

  // const Link = styled(NavLink)`
  // text-decoration: none;
  // margin: 62px 0 48px 73px;
  // a{
  //   color: #000000;
  //   margin-right: 43px;
  // }
  
  // `
export default MemberDetails