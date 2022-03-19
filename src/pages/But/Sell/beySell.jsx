import { Pagination, Stack } from '@mui/material'
import React from 'react'
import { Table } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import BuysellTable from '../BuysellTable'

export const BeySell = () => {
  return (
    <Container>
      <NavLink to='sell'>Buy</NavLink>
      <NavLink to='buy' >Sell</NavLink>

      <Outlet />
      {/* <Wrapper>

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
                <th>거래일시</th>
                <th>계정</th>
                <th>결제 Token</th>
                <th>결제금액</th>
                <th>체결상태</th>
                <th>수수료</th>
                <th>정산금액</th>
                <th>Transaction</th>
              </tr>

            </thead>
            <tbody>


              <tr>
                <td>1</td>
                <td>2022-01-12 09:50:11</td>
                <td>@ioisdfsfsdgsg</td>
                <td>USDT</td>
                <td>100</td>
                <td>진행중</td>
                <td>0.25 AKD</td>
                <td> 100.25 AKD</td>
                <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>

              </tr>
              <tr>

                <td>2</td>
                <td>2022-01-12 09:50:11</td>
                <td>@ioisdfsfsdgsg</td>
                <td>USDT</td>
                <td>100</td>
                <td>진행중</td>
                <td>0.25 AKD</td>
                <td> 100.25 AKD</td>
                <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>

              </tr>

              <tr>

                <td>3</td>
                <td>2022-01-12 09:50:11</td>
                <td>@ioisdfsfsdgsg</td>
                <td>USDT</td>
                <td>100</td>
                <td>진행중</td>
                <td>0.25 AKD</td>
                <td> 100.25 AKD</td>
                <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>

              </tr>

              <tr>

                <td>4</td>
                <td>2022-01-12 09:50:11</td>
                <td>@ioisdfsfsdgsg</td>
                <td>USDT</td>
                <td>100</td>
                <td>진행중</td>
                <td>0.25 AKD</td>
                <td> 100.25 AKD</td>
                <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>

              </tr>

              <tr>

                <td>5</td>
                <td>2022-01-12 09:50:11</td>
                <td>@ioisdfsfsdgsg</td>
                <td>USDT</td>
                <td>100</td>
                <td>진행중</td>
                <td>0.25 AKD</td>
                <td> 100.25 AKD</td>
                <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>

              </tr>

              <tr>

                <td>6</td>
                <td>2022-01-12 09:50:11</td>
                <td>@ioisdfsfsdgsg</td>
                <td>USDT</td>
                <td>100</td>
                <td>진행중</td>
                <td>0.25 AKD</td>
                <td> 100.25 AKD</td>
                <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>

              </tr>

            </tbody>
          </Table> */}

      {/* <BuysellTable/> */}
      {/* </WrapperTable>
        <Paginotion>
          <Stack>
            <Pagination count={2} shape="rounded" />
          </Stack>
        </Paginotion>
      </Wrapper> */}

    </Container>
  )
}
const Container = styled.div`
.buysell{
  display: flex;
  h1{
    margin-left: 20px;
  }
}

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
`

const WrapperTable = styled.div`
margin-top: 24px;
table{
  tr:hover{
background-color: #D9D9D9;
  }
}

`
const Paginotion = styled.div`
display: flex ;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 24px;

`
export default BeySell