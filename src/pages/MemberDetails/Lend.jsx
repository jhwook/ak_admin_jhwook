import { CalendarMonthOutlined, SearchOutlined } from '@mui/icons-material'
import { Pagination, Stack } from '@mui/material'
import { Input } from 'antd'
import React from 'react'
import { Table } from 'react-bootstrap'
import styled from 'styled-components'
import search from '../../assets/icons/search.svg'
export const Lend = () => {
  return (
    <Container>
      
      <Wrapper>  
      <CardHead>
      <select aria-label="Default select example">
  <option selected>10개씩 보기</option>
  <option selected>20개씩 보기</option>
</select>
<CalenIkon><CalendarMonthOutlined /></CalenIkon> 
<input className='data' placeholder='2022-01-18 ~ 2202-01-28'/>

<Ikon><SearchOutlined /> </Ikon>
<input className='search' placeholder='검석'></input>
<button className='excel'>EXCEL</button>
      </CardHead>

<WrapperTable>
<Border/>
<Table responsive="sm"> 
    <thead>
     
      <tr>
        <th>순서</th>
        <th>거래일시</th>
        <th>아이템</th>
        <th>가격</th>
        <th>거래번호</th>
        <th>거래방식</th>
        <th>체결상태</th>
        <th>결제금액</th>
        <th>판매자</th>
        <th>구매자</th>
        <th>수수료</th>
        <th>Transaction</th>
      </tr>
      
    </thead>
    <tbody>
      
    
      <tr>
        <td>1</td>
        <td> 2022-01-12 09:50:11</td>
        <td>Friends #002</td>
        <td>100 AKD</td>
        <td>Or 13</td>
        <td>경매</td>
        <td>진행중</td>
        <td> 100 AKD</td>
        <td>@Kimsdjfkdfl</td>
        <td>@ioimmoj</td>
        <td>0.25 AKD</td>
        <td>0x5906a5c0e5747ee...</td>
       
      </tr>
      <tr>
        <td>1</td>
        <td> 2022-01-12 09:50:11</td>
        <td>Friends #002</td>
        <td>100 AKD</td>
        <td>Or 13</td>
        <td>경매</td>
        <td>진행중</td>
        <td> 100 AKD</td>
        <td>@Kimsdjfkdfl</td>
        <td>@ioimmoj</td>
        <td>0.25 AKD</td>
        <td>0x5906a5c0e5747ee...</td>
       
      </tr>
      <tr>
        <td>1</td>
        <td> 2022-01-12 09:50:11</td>
        <td>Friends #002</td>
        <td>100 AKD</td>
        <td>Or 13</td>
        <td>경매</td>
        <td>진행중</td>
        <td> 100 AKD</td>
        <td>@Kimsdjfkdfl</td>
        <td>@ioimmoj</td>
        <td>0.25 AKD</td>
        <td>0x5906a5c0e5747ee...</td>
      </tr>
      <td></td>  
      <td></td>  
      <td></td>  
      <td></td>  
      <td></td>  
      <td></td>  
      <td></td>  
      <td></td>  
      <td></td>  
      <td></td>  
      <td></td>  
      <td></td>  
    </tbody>
  </Table>
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

const Ikon = styled.div`
position: absolute;
width: 14px;
height: 14px;
top: 168px;
left: 1520px;
box-sizing: border-box;


`
const CalenIkon =styled.div`
position: absolute;
width: 14px;
height: 14px;
top: 165px;
left: 1260px;
box-sizing: border-box;
`
const Border = styled.div`
border: 1px solid #D9D9D9;
`
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
height: 529px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;
tr:hover{
 background-color: #D9D9D9;;
}
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
export default Lend