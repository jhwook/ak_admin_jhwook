import { Pagination, Stack } from '@mui/material'
import styled from 'styled-components'
import Membership_Data from './MemberShib_Data'
export const MemberShip_Status = () => {
  return (
    <Container>
    <Wrapper>
            <Membership_Data/>
            <Stack>
          <Pagination count={2} shape="rounded"/>
      </Stack>
    </Wrapper>
  
    </Container>
  )
}

const Container = styled.div`
display: flex;


`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 1526px;
height: 734px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;
margin: 44px;

`
export default MemberShip_Status