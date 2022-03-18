import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import MemberDetailsTable from './MembrDetailsTable';
export const MemberDetails = () => {


  return (
    <Container>
      <LinkCont>
        <NavLink className={({ isActive }) => (isActive ? "minting active" : "minting")} to='minting'>Minting </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "market active" : "market")} to='market'>Market</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "lend active" : "lend")} to='lend'>Lend</NavLink>
      </LinkCont>
      <Outlet />


    </Container>
  )
}

const LinkCont = styled.div`
padding-top: 62px;
padding-bottom: 48px;
padding-left: 73px;
.market{
  margin-left: 63px;
  text-decoration: none;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
color: #7A7A7A;
}

.lend{
  margin-left: 63px;
  text-decoration: none;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
color: #7A7A7A;
}


.minting{
  text-decoration: none;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
color: #7A7A7A;
}

.active {
  border-bottom: 6px solid #4876EF;
  color: #000000;
}
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

// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 1526px;
//   height: 734px;
// `;


export default MemberDetails;
