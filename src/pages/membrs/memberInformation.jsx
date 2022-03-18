import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Switch } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
export const MemberInformation = () => {
  return (
    <Container>
    <Wrapper>  
      <Title><h1>회원정보 확인 <ArrowForwardIosIcon/>  </h1><p>i0x564DaF7EBD1742Cedc3ECeE1B2b949eCBE35Dbe0 </p></Title>  

<Card>
  <CardCont>
      <TableCont>
<TabdleCad>
<TableLeft>지갑주소</TableLeft>
<TableRight>0x564DaF7EBD1742Cedc3ECeE1B2b949eCBE35Dbe0</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>가입일</TableLeft>
<TableRight>2022-01-22 14:22:22</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>닉네임</TableLeft>
<TableRight>@ioimmoj</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>프로필 아이템</TableLeft>
<TableRight>Friends #002</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>예치량</TableLeft>
<TableRight>1548 USDT</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>출금량</TableLeft>
<TableRight>1548 USDT</TableRight>
</TabdleCad>
      </TableCont>
      <TableCont>
<TabdleCad>
<TableLeft>거래횟수</TableLeft>
<TableRight>2</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>수익률</TableLeft>
<TableRight>+102.12%</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>보유 아이템</TableLeft>
<TableRight>@Friends #002 ( Lv.2), Friends #078 ( Lv.1)</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>보유 AKD</TableLeft>
<TableRight>186 AKD</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>보유 AKG</TableLeft>
<TableRight>186 AKG</TableRight>
</TabdleCad>
<TabdleCad>
<TableLeft>계정 활성</TableLeft>
<TableRight><Switch/> </TableRight>
</TabdleCad>
      </TableCont>
      </CardCont>
      
      </Card>
      <button className='memInfo' >저장</button>
    </Wrapper>    
    </Container>
  )
}
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

export default MemberInformation