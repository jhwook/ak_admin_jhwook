import { Input } from 'antd'
import React from 'react'
import styled from 'styled-components'

export const NftManagment = () => {
  return (
    <Container>
      <Wrapper>
      <Title>NFT 등록</Title>
      <Border/>
      <Tabble>
      <p>판메마켓</p>  
      {/* select 1 */}
      <select >
  <option >Minting</option>
  <option >One</option>
  <option >Two</option>
  <option >Three</option>
</select>
      </Tabble>
      <Border/>
      <Tabble>
      <p>판매방식</p>  
      <select >
  <option >고정가</option>
  <option >One</option>
  <option >Two</option>
  <option >Three</option>
</select>
      </Tabble>
      {/* select 2 */}
      <Border/>
      <Tabble>
      <p>결제토큰</p>  
      <select >
  <option >AKD</option>
  <option >One</option>
  <option >Two</option>
  <option >Three</option>
</select>
      </Tabble>
      {/* select 3 */}
      <Border/>
      <Tabble>
     <p>가격</p>  
      <input placeholder='0' ></input>
      </Tabble>
      {/* sectoion 4 */}
      <Border/>
      {/* section 5 */}
      <Tabble>
      <p>로열티</p>
      <input placeholder='35' ></input>
      </Tabble>
      <Border/>
      {/* section 6 */}
      <Tabble>
          <p>아이템 이름</p>
      <input placeholder='아이템 이름을 입력하세요.
' ></input>
      </Tabble>
      <Border/>
      {/* section 7 */}

      <Tabble left> 
      <p>파일 업로드</p>  
      <input placeholder='아이템을 업로드하세요.' ></input>
      <button className='file'>선택</button>
      </Tabble>
      <Border/>
      <button className='nftreg'>저장</button>
      </Wrapper>
      
     </Container>
  )
}


const Container =styled.div`

margin: 44px;
display: flex;
flex-direction: column;
.nftreg{
width: 30px;
height: 19px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #FFFFFF;
width: 162px;
height: 44px;
background: #4876EF;
border-radius: 8px;
margin-left: 1270px;
margin-top: 24px;
}
input{
  margin-left: auto;
  padding-left: 20px;
  width: 431px;
height: 38px;
background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
}
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 1526px;
height: 626px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;
padding: 34px 50px;
`
const Border = styled.div`
border: 1px solid #F6F6F6;
`
const Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
color: #000000;
margin-bottom: 20px;

`
const Tabble = styled.div`
width: 100%;
display: flex;
margin-top: 8px;
margin-bottom: 10px;
padding-right: ${({left})=> (left ? "645px" : "739px")} ; 
p{
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
}
select{
  padding-left: 15px;
  margin-left: auto;
  width: 431px;
height: 38px;
background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
}.file{
width: 80px;
height: 38px;
border: 1px solid #4876EF;
border-radius: 8px;
margin-left: 14px;
}

`
export default NftManagment