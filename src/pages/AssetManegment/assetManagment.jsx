import { Pagination, Stack } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import AssetTable from './Table'

export const AssetManagment = () => {
  return (
    <Container>
      
      <Wrapper>  
      <h1>스욉관리</h1>
      <CardHead>
      <select aria-label="Default select example">
  <option selected>10개씩 보기</option>
  <option selected>20개씩 보기</option>
</select>

<input className='data' placeholder='2022-01-18 ~ 2202-01-28'></input>
<input className='search' placeholder='검석'></input>
<button className='excel'>EXCEL</button>
      </CardHead>

<WrapperTable>
  <AssetTable/>
</WrapperTable>
<Paginotion>
      <Stack>
          <Pagination count={2} shape="rounded" />
        </Stack>
  </Paginotion>
      </Wrapper> 
    
    </Container>
  )
}
const Container =styled.div`
margin: 44px;
display: flex;
flex-direction: column;
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
const CardHead = styled.div`
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

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
flex-direction: column;
width: 1526px;
height: 734px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;
`

const WrapperTable = styled.div`
margin-top: 24px;

`
const Paginotion =styled.div`
display: flex ;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 24px;

`
export default AssetManagment