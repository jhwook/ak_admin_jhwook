import React from 'react'
import  styled  from 'styled-components'
import PullManagmentTable from './PullManagmentTable'
export const Pullmnagment = () => {
  return (
    <Container>
        
  <Wrapper>
        <PullManagmentTable/>
   </Wrapper>
        </Container>
  )
}

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

export default Pullmnagment;