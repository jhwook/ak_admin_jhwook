import { Pagination, Stack } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import MemberDetailsTable from './MembrDetailsTable';
import {memberData}from "./Data"
export const MemberDetails = () => {
  return (
    <Container>
<Link to={''}>
  <a href="/">Minting</a>
  <a href="/">Market</a>
  <a href="/">Lend</a>
</Link>

      <Wrapper>
        <Card>
          <MemberDetailsTable/>
          <Stack>
          <Pagination count={2} shape="rounded" />
        </Stack>
        </Card>
      </Wrapper>
      
    </Container>
  )
}


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
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1526px;
  height: 734px;`

  const Link = styled(NavLink)`
  text-decoration: none;
  margin: 62px 0 48px 73px;
  a{
    color: #000000;
    margin-right: 43px;
  }
  
  `
export default MemberDetails