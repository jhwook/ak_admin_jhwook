import React from 'react'
import styled from 'styled-components'
export const AprManagment = () => {

  return (
    <Container>
      <Wrapper>
      <h1>Single-side APR</h1>
      <Card>
      <table className="table">
  <thead>
<th></th>
<th></th>
<th></th>
    <tr className='bg'>
      <th scope="col">예치된 총 수량</th>
      <th scope="col">환산 가치 (예치된 총 수량 *KLAY 최근 AKD 결제액)</th>
      <th scope="col">APR (토큰 가격*1일 분배 수량*365/TVL*100%)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type='text' placeholder='000-0000' /></td>
      <td><input type='text' placeholder='000-0000' /></td>
      <td><input type='text' placeholder='1 week' /></td>
    </tr>
 </tbody>
</table>
 <Border/>
      </Card>

      <h1 className='pair' >Pair APR</h1>
      <Card>
      <table className="table">
  <thead>
<th></th>
<th></th>
<th></th>
    <tr className='bg'>
      <th scope="col">예치된 총 수량</th>
      <th scope="col">환산 가치 (예치된 총 수량 *KLAY 최근 AKD 결제액)</th>
      <th scope="col">APR (토큰 가격*1일 분배 수량*365/TVL*100%)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type='text' placeholder='000-0000' /></td>
      <td><input type='text' placeholder='000-0000' /></td>
      <td><input type='text' placeholder='1 week' /></td>
    </tr>
 </tbody>
</table>
 <Border/>
      </Card>
      <button type="button" className="btn btn-primary">저장</button>
      </Wrapper>
      
       </Container>
  )
}

const Container =styled.div`
margin: 44px;
display: flex;
flex-direction: column;
button{
  background: #4876EF;
border-radius: 8px;
width: 162px;
height: 44px;
margin-left:auto ;
margin-top:37px ;
}
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 1526px;
height: 734px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;
padding: 50px;
h1{
  font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
color: #000000;
margin: 0px 34px 24px;
}
.pair{
  margin-top: 43px;
  margin-bottom: 0;
}

table{
  .bg{
    background-color: #F1F2F4;;
  }

}
input{
  border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
width: 440px;
height: 38px;
padding-left: 20px;
}
`
const Border =styled.div`
border: 1px solid #D9D9D9;
width: 100%;

`
const Card = styled.div`
justify-content: center;
align-items: center;
`
export default AprManagment