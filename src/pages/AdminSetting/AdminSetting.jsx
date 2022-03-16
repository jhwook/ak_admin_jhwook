import { Pagination, Stack, Switch } from '@mui/material'
import React from 'react'
import { Table } from 'react-bootstrap';
import styled from 'styled-components'

export const AdminSetting = () => {
  const [checked, setChecked] = React.useState(false);
  
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container>
      
      <Wrapper>  
      <h1>관리자 계정관리</h1>
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
<Table responsive="sm">
    <thead>
      <tr>
        <th>순서</th>
        <th>관리자 ID</th>
        <th>관리자 PW</th>
        <th>관리자 이름</th>
        <th>등록일</th>
        <th>수정일</th>
        <th>연락처</th>
        <th>그룹명</th>
        <th>사용여부</th>
      </tr>
      
    </thead>
    <tbody>
      
    
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>AKD Dollar</td>
        <td>AkD</td>
        <td>2022-01-29 11:00:00</td>
        <td>264,321</td>
        <td> 155,506</td>
        <td> 155,506</td>
        <td>   <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    /> </td>
      </tr>
      <tr>

        <td>2</td>
        <td>Table cell</td>
        <td>AKD Dollar</td>
        <td>AkD</td>
        <td>2022-01-29 11:00:00</td>
        <td>264,321</td>
        <td> 155,506</td>
        <td> 155,506</td>
        <td>   <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    /> </td>
      </tr>
      
    </tbody>
  </Table>
</WrapperTable>

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
margin-top: 24px;
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
color: #000000;
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
export default AdminSetting