import React from "react";
import styled from "styled-components";

export const Login = () => {
  return <Container>
    <Wrapper>
      <h1>
        Welcome back
      </h1>
      <span>Login to your account</span>
      <div className="inputSectino">
        <p>Account ID*</p>
        <input className="loginInpunt" type="text" placeholder="Account" />
        <p>Password*</p>
        <input className="loginInpunt" type="password" name="password" placeholder="Password" />

        <div className="congtCheckBox"><input type="checkbox" className="checkBox" /><h6>Remember & Auto Login</h6> </div>
        <div className="loginBtn">Login</div>
      </div>
    </Wrapper>
  </Container>;
};

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`
const Wrapper = styled.div`
width: 456px;
height: 430px;
h1{

font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 45px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

color: #353535;
}
span{
   
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: #BBBBBB;
margin-bottom: 20px;

}
p{
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;

color: #7A7A7A;

} h6{
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: #BBBBBB;
    }
    .loginBtn{
width: 440px;
height: 52px;
background: #353535;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
border-radius: 30px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
    }
.checkBox{
  width: 20px;
height: 20px;
margin-right: 6px;

background: #F8F9FA;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 4px;
  }
.inputSectino{
  display: flex;
  flex-direction: column;

  .congtCheckBox{

    display: flex;
    margin-bottom: 37px;
  }
.loginInpunt{
width: 440px;
height: 48px;
background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
margin-bottom: 20px;
padding: 20px;
}
}
`
export default Login;
