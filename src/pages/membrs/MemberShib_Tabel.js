import { CalendarMonthOutlined, SearchOutlined } from '@mui/icons-material'
import { Pagination, Stack } from '@mui/material'
import { Input } from 'antd'
import React, { useState } from 'react'
import { NavLink, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import search from '../../assets/icons/search.svg'

export const MemberTable = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

let navigate = useNavigate();
  return (
    <Container>
      
      <Wrapper> 
        <h1>회원현황</h1> 
      <CardHead>
      <select aria-label="Default select example">
  <option selected>10개씩 보기</option>
  <option selected>20개씩 보기</option>
</select>
{/* <CalenIkon><CalendarMonthOutlined /></CalenIkon>  */}
<input className='data' placeholder='2022-01-18 ~ 2202-01-28'/>

{/* <Ikon><SearchOutlined /> </Ikon> */}
<input className='search' placeholder='검석'></input>
<button className='excel'>EXCEL</button>
      </CardHead>

<WrapperTable>
<Border/>
<Table responsive="sm"> 
    <thead>
    
      <tr  >
        <th>순서</th>
        <th>지갑주소</th>
        <th>닉네임</th>
        <th>예치량</th>
        <th>출금량</th>
        <th>Item 수</th>
        <th>보유 AKD</th>
        <th>보유 AKG</th>
        <th>회원상태</th>
        <th>가입일</th>
      </tr>
      
    </thead>
    <tbody>
      
      <tr onClick={()=>{navigate('/memberInformation')}} >
        <td >1</td>
        <td> 0x8...F7F8</td>
        <td>@ioimmoj</td>
        <td>409.169 USDT</td>
        <td>409.169 USDT</td>
        <td>50</td>
        <td>1548 AKD</td>
        <td> 1548 AKD</td>
        <td>일반</td>
        <td>2022-01-29 11:00:00</td>
       
      </tr>
     <tr onClick={()=>{navigate('/memberInformation')}}>
        <td>2</td>
        <td> 0x8...F7F8</td>
        <td>@ioimmoj</td>
        <td>409.169 USDT</td>
        <td>409.169 USDT</td>
        <td>50</td>
        <td>1548 AKD</td>
        <td> 1548 AKD</td>
        <td>일반</td>
        <td>2022-01-29 11:00:00</td>
       
      </tr>

      
      <tr onClick={()=>{navigate('/memberInformation')}}>
        <td>3</td>
        <td> 0x8...F7F8</td>
        <td>@ioimmoj</td>
        <td>409.169 USDT</td>
        <td>409.169 USDT</td>
        <td>50</td>
        <td>1548 AKD</td>
        <td> 1548 AKD</td>
        <td>일반</td>
        <td>2022-01-29 11:00:00</td>
       
      </tr>
      <tr onClick={()=>{navigate('/memberInformation')}}>
        <td>4</td>
        <td> 0x8...F7F8</td>
        <td>@ioimmoj</td>
        <td>409.169 USDT</td>
        <td>409.169 USDT</td>
        <td>50</td>
        <td>1548 AKD</td>
        <td> 1548 AKD</td>
        <td>일반</td>
        <td>2022-01-29 11:00:00</td>
       
      </tr >
      <tr onClick={()=>{navigate('/memberInformation')}}>
        <td>5</td>
        <td> 0x8...F7F8</td>
        <td>@ioimmoj</td>
        <td>409.169 USDT</td>
        <td>409.169 USDT</td>
        <td>50</td>
        <td>1548 AKD</td>
        <td> 1548 AKD</td>
        <td>일반</td>
        <td>2022-01-29 11:00:00</td>
       
      </tr>
      <tr onClick={()=>{navigate('/memberInformation')}}>
        <td>6</td>
        <td> 0x8...F7F8</td>
        <td>@ioimmoj</td>
        <td>409.169 USDT</td>
        <td>409.169 USDT</td>
        <td>50</td>
        <td>1548 AKD</td>
        <td> 1548 AKD</td>
        <td>일반</td>
        <td>2022-01-29 11:00:00</td>
       
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
height: 734px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;
h1{
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;

color: #000000;
}
tbody{
tr:hover{
 background-color: #D9D9D9;;
}}
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
export default MemberTable