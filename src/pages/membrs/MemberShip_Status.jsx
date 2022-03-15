import { MenuItem, Pagination, Stack } from "@mui/material";
import styled from "styled-components";
import Membership_Data from "./MemberShib_Data";
export const MemberShip_Status = () => {
  return (
    <Container>



      <Wrapper>
        <h1>회원현황</h1>
        {/* <section style={{padding: '1rem'}}>
         <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}} >
<article style={{width:'150px'}} >
<select id='res'>
  <MenuItem vlaue={10}>10</MenuItem>
  <MenuItem >20</MenuItem>
</select>
</article>
         </div>
        </section> */}
<Card>
  <Membership_Data />
        <Stack>
          <Pagination count={2} shape="rounded" />
        </Stack>
</Card>
        
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 44px;
  h1{
    margin: 34px 50px;

font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
  }
`;
const Card = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1526px;
  height: 734px;

`
export default MemberShip_Status;
