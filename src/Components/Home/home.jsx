import React from 'react'
import styled from 'styled-components';

export const Home = () => {
  return (
    <Container>
<Wrapper>

    <Cards>
      <p>회원수</p>
<h1>3,000</h1>
<p>현재: 1,000</p>
<span>탈퇴: 124</span>
    </Cards>
    <Cards>
      <p>금일 방문자수</p>
      <h1>3,000</h1>
      <p>전주대비 10.26%</p>
    </Cards>
    <Cards>
      <p>누적 AKD 누적 총금액</p>
      <h1>3,000 AKD</h1>
      <p>전일대비 200 AKD</p>
    </Cards>
    <Cards>4</Cards>
</Wrapper>
<Wrapper>
    <Card>
      <Wrapp><h1>AKG 지급현황</h1>
      <div className='border'></div>
      <table className='cont'>
        <div className='jigip' >지급타입</div>
        <div className='juso'>지갑주소</div>
        <div className='suryang'>지갑수량</div>
        <div>지급금액</div>
        </table>
      <div className='border'></div>
      {/* 1 */}
<div className='cont'>
<div className='one'>Stake</div>
<div className='two'>0x8C4077dfEb3621Ed2DDD07F36...</div>
<div className='thare' >100</div>
<div className='four'>$6.00</div>
  </div>
  <div className='bord'></div>
  {/* 2 */}
  <div className='cont'>
<div className='one'>Lend</div>
<div className='two'>0x8C4077dfEb3621Ed2DDD07F36...</div>
<div className='thare' >1</div>
<div className='four'>$1.00</div>
  </div>
  <div className='bord'></div>
  {/* 3 */}
  <div className='cont'>
<div className='one'>Stake</div>
<div className='two'>0x8C4077dfEb3621Ed2DDD07F36...</div>
<div className='thare' >1.2</div>
<div className='four'>$1.20</div>
  </div>
  <div className='bord'></div>
  {/* 4 */}
  <div className='cont'>
<div className='one'>Stake</div>
<div className='two'>0x8C4077dfEb3621Ed2DDD07F36...</div>
<div className='thare' >12</div>
<div className='four'>$12.1</div>
  </div>
  <div className='bord'></div>
  {/* 5 */}
  <div className='cont'>
<div className='one'>Stake</div>
<div className='two'>0x8C4077dfEb3621Ed2DDD07F36...</div>
<div className='thare' >1</div>
<div className='four'>$1.00</div>
  </div>
  <div className='bord'></div>
  {/* 6 */}
  <div className='cont'>
<div className='one'>Stake</div>
<div className='two'>0x8C4077dfEb3621Ed2DDD07F36...</div>
<div className='thare' >0.6</div>
<div className='four'>$0.60</div>
  </div>
  <div className='bord'></div>


      </Wrapp> 
    </Card>
    <Card>
    
    </Card>
</Wrapper>
    </Container>
  )
}
const Container = styled.div`
display: flex;
flex-direction: column;

`
const Wrapper = styled.div`
display:flex ;

`
const Cards =styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 369px ;
height: 190px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;
margin: 30px;
p{
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #000000;
margin-top: 26px;

}
span{
  font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #000000;
}
h1{
  font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 47px;
margin-top: 22px;
color: #000000
}
`
const Card = styled.div`
width: 748px;
height: 454px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;
margin: 30px;
`
const Wrapp = styled.div`
padding: 34px 50px 50px 50px;
.cont{
  display: flex;
  height: 44px;
  align-items: center;
  .jigip{
    margin-right: 50px;
  }
  .juso{
    margin-right: 262px;
  }
  .suryang{
    margin-right: 60px;
  }
}
.border{
  border-bottom: 2px solid #d9d9d9;
}
.one{
  margin-right: 69px;
}
.two{
  margin-right: 64px;
}
.thare{
  margin-right: 110px;
}
.bord{
  border-bottom: 1px solid #d9d9d9;
}
h1{
  margin-bottom: 24px;
  font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;

color: #000000;

}

`
export default Home;