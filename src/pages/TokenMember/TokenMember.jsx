import React from 'react'
import  styled  from 'styled-components'
import Demo from './Data'
export const TokenMember = () => {
  return (
    <Container>
        
  <Wrapper>
        <Demo/>
        <ModelTab>
     <Head><h1> 토큰 등록</h1></Head>
     <table className="table table-borderless">
  <thead>
    <tr>
      <th scope="col">컨트랙트</th>
      <th scope="col"><input/></th>
    </tr>
    </thead>
    <thead>
    <tr>
      <th scope="col">토큰명 (한글)</th>
      <th scope="col"><input/></th>
    </tr>
    </thead>
    <thead>
    <tr>
      <th scope="col">토큰명 (영문)</th>
      <th scope="col"><input/></th>
    </tr>
    </thead>
    <thead>
    <tr>
      <th scope="col">소수 자릿수</th>
      <th scope="col"><input/></th>
    </tr>
    </thead>
    <thead>
    <tr>
      <th scope="col">심볼</th>
      <th scope="col"><input className='img'/> <button className='btntoken'>선택</button> </th>
      <th scope="col"> </th>
    </tr>
    </thead>
   
  </table>
  <BtnCont>
    <button className='btnTokens'>취소</button>
  
    <button className='btnTokenOk'>등록</button>
  </BtnCont>
    </ModelTab>
   </Wrapper>
        </Container>
  )
}

const BtnCont = styled.div`
display: flex;
justify-content: center;
width: 100%;
.btnTokenOk{
width: 210px;
height: 44px;
background: #4876EF;
border-radius: 8px;
margin-left: 20px;
}
.btnTokens{
width: 210px;
height: 44px;
left: 0px;
top: 0px;

background: #F1F2F4;
border-radius: 8px;

}
`

const Head = styled.div`
display: flex;
align-items: center; 
width:100%;
`
const ModelTab= styled.div`
thead{
  border-bottom: 1px solid #F6F6F6;
 
}
input{
width: 321px;
height: 38px;
background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
}
.img{
  width: 248px;
}
.btntoken{
  margin-left: 8px ;
width: 60px;
height: 38px;
background: #FFFFFF;
border: 1px solid #4876EF;
box-sizing: border-box;
border-radius: 8px;

}
position: absolute;
padding: 50px 34px;
width: 540px;
height: 550px;
left: 1174px;
top: 350px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
border-radius: 12px;
h1{
margin-right: auto;
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

const Container = styled.div`
margin: 44px;
display: flex;
justify-content: center;
align-items: center;
width: 1526px;
height: 454px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;

`
const Wrapper = styled.div`

display: flex;

flex-direction: column;
justify-content: center;
align-items: center;
width: 1426px;

`

export default TokenMember;