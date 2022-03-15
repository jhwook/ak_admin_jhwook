import { Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { Box } from '@mui/system';
import Search from 'antd/lib/transfer/search';
import React,{useState} from 'react'
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import Switch from '@mui/material/Switch';
import { Checkbox } from 'antd';

export const PullTable = () => {
    const [checked, setChecked] = React.useState(true);

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container>
      <h1>Pull 관리</h1>
      <Wrapper>

      
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
</Wrapper>
<div>
  <Table responsive="sm">
    <thead>
      <tr>
        <th> <Checkbox/> </th>
        <th>순서</th>
        <th>토큰명</th>
        <th>심볼</th>
        <th>Contract</th>
        <th>총 수량</th>
        <th>분배 수량</th>
        <th>잔여 수량</th>
        <th>사용여부</th>
      </tr>
      
    </thead>
    <tbody>
      
    
      <tr>
      <td> <Checkbox/> </td>
        <td>1</td>
        <td>Table cell</td>
        <td>AKD Dollar</td>
        <td>AkD</td>
        <td>0x7b24e052c138df127ab26a8bd5182ba913d9f7d0dd8a71...</td>
        <td>264,321</td>
        <td> 155,506</td>
        <td>   <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    /> </td>
      </tr>
      <tr>
      <td> <Checkbox/> </td>

        <td>2</td>
        <td>Table cell</td>
        <td>AKD Dollar</td>
        <td>AkD</td>
        <td>0x7b24e052c138df127ab26a8bd5182ba913d9f7d0dd8a71...</td>
        <td>264,321</td>
        <td> 155,506</td>
        <td>   <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    /> </td>
      </tr>
      
    </tbody>
  </Table>
  
</div>

    </Container>

  
  )
}

const  Container= styled.div`
table{
  width: 1426px;

  thead{

    background: #F1F2F4;
    height: 14px;
  }
  tbody{
    width: 1426px;
  }
}


`

const WrapperBtn = styled.div`
display: flex;
margin:24px 0px;
`
const Wrappersearch = styled.div`
display: flex;
margin-left: 880px;

`
const Wrapper = styled.div`
display: flex;
width: 100%;

`
export default PullTable