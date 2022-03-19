import { Pagination, Stack } from "@mui/material";
import { Checkbox, Switch } from "antd";
import React from "react";
import { Table } from "react-bootstrap";
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
          <button className="excel">등록</button>
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
              <tr>
                <th>
                  <Checkbox />
                </th>
                <th>순서</th>
                <th>토큰명</th>
                <th>심볼</th>
                <th>Contract</th>
                <th>총 수량</th>
                <th>분배 수량</th>
                <th>잔여 수량</th>
                <th>사용여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <Checkbox />
                </th>
                <td>1</td>
                <td>AK dollar</td>
                <td>AKD</td>
                <td>0x7b24e052c138df127ab26a8bd5182ba913d9f7d0dd8a71...</td>
                <td>264,321</td>
                <td>155,506</td>
                <td>155,506</td>
                <td>
                  {" "}
                  <Switch />{" "}
                </td>
              </tr>
            </tbody>
          </Table>
          <ModalRegister>
            <h1>토큰 등록</h1>
            <div className="registerCont">
              <div className="regText">컨트랙트</div>
              <div>
                <input className="ModalInput" type="text" />{" "}
              </div>
            </div>
            <Border />
            {/* 2 */}
            <div className="registerCont">
              <div className="regText">토큰명 (한글)</div>
              <div>
                <input className="ModalInput" type="text" />{" "}
              </div>
            </div>
            <Border />
            {/* 3 */}
            <div className="registerCont">
              <div className="regText">토큰명 (영문)</div>
              <div>
                <input className="ModalInput" type="text" />{" "}
              </div>
            </div>
            <Border />
            {/* 4 */}
            <div className="registerCont">
              <div className="regText">소수 자릿수</div>
              <div>
                <input className="ModalInput" type="text" />{" "}
              </div>
            </div>
            <Border />
            {/* 5 */}
            <div className="registerCont">
              <div className="regText">심볼</div>
              <div>
                <input
                  className="ModalInput"
                  placeholder="이미지를 추가해주세요."
                  type="text"
                />
                <button className="regSelect">선택</button>
              </div>
            </div>
            <Border />
            <div className="regButton">
              <button className="regCencel">취소</button>
              <button className="regOk">확인</button>
            </div>
          </ModalRegister>
        </WrapperTable>
      </Wrapper>
    </Container>
  );
};
const Border = styled.div`
  border: 1px solid #e6e6e6;
`;
const ModalRegister = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 620px;
  height: 556px;
  left: 1096px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 34px 50px 34px 50px;
  .regButton {
    display: flex;
    justify-content: center;
    margin-top: 24px;
    width: 100%;
    gap: 20px;
  }
  .regCencel {
    width: 230px;
    height: 54px;
    background: #f1f2f4;
    border-radius: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #7a7a7a;
  }
  .regOk {
    width: 230px;
    height: 54px;
    background: #4876ef;
    border-radius: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
  }
  .regSelect {
    width: 60px;
    height: 38px;
    background: #ffffff;
    border: 1px solid #4876ef;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #4876ef;
    margin-left: 13px;
  }
  .regText {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    margin-right: auto;
  }
  .ModalInput {
    width: 321px;
    height: 38px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
    /* gap: 10px; */
  }
  .registerCont {
    display: flex;
    margin-bottom: 9px;
    margin-top: 8px;
  }
`;

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
