import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Pagination, Stack, Switch } from '@mui/material';
import React from 'react'
import { Table } from 'react-bootstrap';
import styled from 'styled-components'
export const Myprofile = () => {
  return (
    <Container>
    <Wrapper>  
      <Title><h1>내 프로필 <ArrowForwardIosIcon/>  </h1><p>i0x564DaF7EBD1742Cedc3ECeE1B2b949eCBE35Dbe0 </p></Title>  

<Card>
  <CardCont>
      <TableCont>
<TabdleCad>
<TableLeft>관리자 아이디</TableLeft>
<TableRight>0x564DaF7EBD1742Cedc3ECeE1B2b949eCBE35Dbe0</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>관리자 이름</TableLeft>
<TableRight>MetaMask</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>비밀번호</TableLeft>
<TableRight>hsdhjsh</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>비밀번호 재입력 </TableLeft>
<TableRight>hsdhjsh</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>휴대폰 번호</TableLeft>
<TableRight>010-0000-0000</TableRight>
</TabdleCad>


      </TableCont>
      <TableCont>
<TabdleCad>
<TableLeft>연결지갑</TableLeft>
<TableRight>2</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>지갑주소</TableLeft>
<TableRight>+102.12% </TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>사용자 그룹</TableLeft>
<TableRight>186 QTBK</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>?</TableLeft>
<TableRight>?</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>사용 여부</TableLeft>
<TableRight><Switch/> </TableRight>
</TabdleCad>
      </TableCont>
      </CardCont>
      
      </Card>
      <button className='memInfo' >저장</button>
    </Wrapper> 



    <ItemActive>
        <ItemWrape>

       
         <h1>Item Activity</h1>
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
<Boreder/>
      <Table responsive="sm">
    <thead>
      <tr  >
        <th>순서</th>
        <th>위치</th>
        <th>상태</th>
        <th>디바이스</th>
        <th>IP 주소</th>
        <th>지갑</th>
        <th>계정</th>
        <th>접속 시간</th>
      </tr>
      
    </thead>
    <tbody>
      

{/* 1 */}
      <tr>
        <td>1</td>
        <td>대한민국</td>
        <td className='tds' ><span>OK</span></td>
        <td>Chrome - Windows</td>
        <td>236.125.56.78</td>
        <td>MetaMask</td>
        <td>0x8C4077dfEb3621Ed2DDD07F366aE23Df12fCF7F8</td>
        <td>2022-01-12 09:50:11</td>
      </tr>
{/* 2 */}
      <tr>
        <td>2</td>
        <td>대한민국</td>
        <td className='tds' ><span>OK</span></td>
        <td>Chrome - Windows</td>
        <td>236.125.56.78</td>
        <td>MetaMask</td>
        <td>0x8C4077dfEb3621Ed2DDD07F366aE23Df12fCF7F8</td>
        <td>2022-01-12 09:50:11</td>
      </tr>
{/* 3 */}
      <tr>
        <td>3</td>
        <td>대한민국</td>
        <td className='tds' ><span>OK</span></td>
        <td>Chrome - Windows</td>
        <td>236.125.56.78</td>
        <td>MetaMask</td>
        <td>0x8C4077dfEb3621Ed2DDD07F366aE23Df12fCF7F8</td>
        <td>2022-01-12 09:50:11</td>
      </tr>
{/* 4 */}
      <tr>
        <td>4</td>
        <td>대한민국</td>
        <td className='tds' ><span>OK</span></td>
        <td>Chrome - Windows</td>
        <td>236.125.56.78</td>
        <td>MetaMask</td>
        <td>0x8C4077dfEb3621Ed2DDD07F366aE23Df12fCF7F8</td>
        <td>2022-01-12 09:50:11</td>
      </tr>
{/* 5 */}
      <tr>
        <td>5</td>
        <td>대한민국</td>
        <td className='tds' ><span>OK</span></td>
        <td>Chrome - Windows</td>
        <td>236.125.56.78</td>
        <td>MetaMask</td>
        <td>0x8C4077dfEb3621Ed2DDD07F366aE23Df12fCF7F8</td>
        <td>2022-01-12 09:50:11</td>
      </tr>
{/* 6 */}
      <tr>
        <td>6</td>
        <td>대한민국</td>
        <td className='tds' ><span>OK</span></td>
        <td>Chrome - Windows</td>
        <td>236.125.56.78</td>
        <td>MetaMask</td>
        <td>0x8C4077dfEb3621Ed2DDD07F366aE23Df12fCF7F8</td>
        <td>2022-01-12 09:50:11</td>
      </tr>
    
      
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

       </ItemWrape>  
    </ItemActive> 
    
    </Container>
  )
}



const Boreder = styled.div`
border: 1px solid #D9D9D9;
`

  const Paginotion =styled.div`
  display: flex ;
  justify-content: center;
  align-items: center;
  width: 100%;
  `
  
const ItemWrape = styled.div`
padding: 34px 50px 0 50px;
h1{
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
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
const ItemActive = styled.div`
width: 1526px;
height: 650px;
margin-top: 44px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;
`


const WrapperTable = styled.div`
margin-top: 24px;
.tabHead{
    display: flex;
}

tbody{
   
    tr{
        
    span{
        padding: 5px;
width: 40px;
height: 100px;
background: #E8FFF3;
border-radius: 4px;
font-style: normal;
font-weight: 500;
line-height: center;
color: #54CD89;
}}
tr:hover{
background-color: #D9D9D9;
}
}

`

// item active style

const TableCont = styled.div`
display: flex;
flex-direction: column;

`
const CardCont = styled.div`
display: flex;
`
const Card =styled.div`
display: flex;
`
const TabdleCad = styled.div`
display: flex;
`

const TableLeft = styled.div`
padding-left:20px ;
width: 190px;
height: 55px;
background: #F6F6F6;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
border-top: 1px solid #EEEEEE;
border-bottom: 1px solid #EEEEEE;
`
const TableRight = styled.div`
padding-left:60px ;
height: 55px;
width: 523px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
border-top: 1px solid #EEEEEE;
border-bottom: 1px solid #EEEEEE;


`


const Title = styled.div`
display: flex;
margin-bottom: 20px;
`
const Container = styled.div`
display: flex;
flex-direction: column;
padding: 44px;


` 

const Wrapper = styled.div`
.memInfo{
  margin-top: 24px;
  margin-left: 1264px;
width: 162px;
height: 44px;
background: #4876EF;
border-radius: 8px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #FFFFFF;
}
width: 1526px;
height: 654px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;
padding: 34px 50px;
h1{

font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;
color: #000000;

}
p{
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
text-decoration-line: underline;
color: #4876EF;
}
`



export default Myprofile