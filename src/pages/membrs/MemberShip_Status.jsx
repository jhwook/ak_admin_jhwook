import React from "react";

import { Box, Button, FormControl, InputLabel, MenuItem, Pagination, Select, Stack } from "@mui/material";
import Search from "antd/lib/transfer/search";
import styled from "styled-components";
import MembersTabele from "./MemberShib_Tabel";
export const MemberShip_Status = () => {

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container>



      <Wrapper>
        <h1>회원현황</h1>
        <CardWrapper>
          
        
        <WrapperBtn>
<Stack direction="row" spacing={2}>
<Box sx={{ minWidth: 160, minHeight: 44 }}>

<FormControl fullWidth>
        <InputLabel sx={{width:'160'}} id="demo-simple-select-label">10 개씩 보기</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="10 개씩 보기"
          onChange={handleChange}
        >
          <MenuItem value={10}>10 개씩 보기</MenuItem>
          <MenuItem value={20}>30 개씩 보기</MenuItem>
        </Select>
      </FormControl>
</Box>

<Button  variant="outlined" startIcon={''}>
  Delete
</Button>
</Stack>

<Wrappersearch>
  <Stack direction="row" spacing={2}>
<Search placeholder="검색" allowClear  style={{ width: 200 }} />
<Button variant="contained">등록</Button>
</Stack>
</Wrappersearch>
</WrapperBtn>
</CardWrapper>
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
  <MembersTabele/>
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
  padding:50px ;

`
const WrapperBtn = styled.div`
display: flex;

`
const Wrappersearch = styled.div`
display: flex;
margin-left: 880px;

`
const CardWrapper = styled.div`
display: flex;
padding:0 50px  24px;

`
export default MemberShip_Status;
