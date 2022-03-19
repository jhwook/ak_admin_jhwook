import { Pagination, Stack } from "@mui/material";
import { Checkbox } from "antd";
import React from "react";
import { Table } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

export const TokenMember = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Token 관리</h1>
        <CardHead>
          <select aria-label="Default select example">
            <option selected>10개씩 보기</option>
            <option selected>20개씩 보기</option>
          </select>
          <button className="btnDelte">선택삭제</button>
          <input className="data" placeholder="2022-01-18 ~ 2202-01-28"></input>
          <input className="search" placeholder="검석"></input>
          <button className="excel">EXCEL</button>
        </CardHead>

        <WrapperTable>
          <Table responsive="sm">
            <thead>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <tr>
                <th>
                  <Checkbox />
                </th>
                <th>순서</th>
                <th>거래일시</th>
                <th>계정</th>
                <th>출금 Token</th>
                <th>출금금액</th>
                <th>체결상태</th>
                <th>수수료</th>
                <th>정산금액</th>
                <th>Transaction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <Checkbox />
                </th>
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
            </tbody>
          </Table>

          {/* <BuysellTable/> */}
        </WrapperTable>
        <Paginotion>
          <Stack>
            <Pagination count={2} shape="rounded" />
          </Stack>
        </Paginotion>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  .buysell {
    display: flex;
    h1 {
      margin-left: 20px;
    }
  }

  margin: 44px;
  display: flex;
  flex-direction: column;
  .data {
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
    width: 298px;
    height: 44px;
    margin-right: 14px;
    padding: 20px;
  }
  .search {
    width: 240px;
    height: 44px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
    margin-right: 24px;
    padding: 20px;
  }
  .excel {
    border: none;
    width: 162px;
    height: 44px;
    background: #4876ef;
    border-radius: 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
  }
`;
const CardHead = styled.div`
  width: 100%;
  height: 44px;
  .btnDelte {
    width: 160px;
    height: 44px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
    margin-right: 346px;
    margin-left: 14px;
  }
  select {
    /* margin-right: 526px; */
    width: 160px;
    height: 44px;

    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
  }
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  width: 1526px;
  height: 734px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    margin-bottom: 24px;
  }
`;

const WrapperTable = styled.div`
  margin-top: 24px;
  thead {
    tr {
      background: #f1f2f4;
    }
  }
  tbody {
    tr:hover {
      background-color: #d9d9d9;
    }
  }
`;
const Paginotion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 24px;
`;
export default TokenMember;

const ModelTab = styled.div`
  //   thead {
  //     border-bottom: 1px solid #f6f6f6;
  //   }
  //   input {
  //     width: 321px;
  //     height: 38px;
  //     background: #ffffff;
  //     border: 1px solid #d9d9d9;
  //     box-sizing: border-box;
  //     border-radius: 8px;
  //   }
  //   .img {
  //     width: 248px;
  //   }
  //   .btntoken {
  //     margin-left: 8px;
  //     width: 60px;
  //     height: 38px;
  //     background: #ffffff;
  //     border: 1px solid #4876ef;
  //     box-sizing: border-box;
  //     border-radius: 8px;
  //   }
  //   position: absolute;
  //   padding: 50px 34px;
  //   width: 540px;
  //   height: 550px;
  //   left: 1174px;
  //   top: 350px;
  //   background: #ffffff;
  //   box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  //   border-radius: 12px;
  //   h1 {
  //     margin-right: auto;
  //     font-style: normal;
  //     font-weight: 600;
  //     font-size: 24px;
  //     line-height: 36px;
  //     display: flex;
  //     align-items: center;
  //     text-align: center;
  //     color: #000000;
  //   }
  //
`;

{
  /* <ModelTab>
          <Head>
            <h1> 토큰 등록</h1>
          </Head>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">컨트랙트</th>
                <th scope="col">
                  <input />
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th scope="col">토큰명 (한글)</th>
                <th scope="col">
                  <input />
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th scope="col">토큰명 (영문)</th>
                <th scope="col">
                  <input />
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th scope="col">소수 자릿수</th>
                <th scope="col">
                  <input />
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th scope="col">심볼</th>
                <th scope="col">
                  <input className="img" />{" "}
                  <button className="btntoken">선택</button>{" "}
                </th>
                <th scope="col"> </th>
              </tr>
            </thead>
          </table>
          <BtnCont>
            <button className="btnTokens">취소</button>

            <button className="btnTokenOk">등록</button>
          </BtnCont>
        </ModelTab> */
}
