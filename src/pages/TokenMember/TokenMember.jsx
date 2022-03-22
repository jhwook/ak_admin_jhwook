import { CalendarMonthOutlined, SearchOutlined } from "@mui/icons-material";
import { Pagination, Stack } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Checkbox, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
// import { tokenList } from "../../boot/axios";
import { token } from "../../boot/axios";


export const TokenMember = () => {
  const [open, setOpen] = useState(false);
  const [register, setRegister] = useState(false);
  function checkBoxClick() {
    setOpen(() => !open);
  }
  function Register() {
    setRegister(() => !register);
  }

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    token.get().then(res => {
      setTableData(res.data.list);
    }).catch(err => console.log(err));

  }, [])

  // const [tableData, setTableData] = useState([]);
  // useEffect(() => {
  //   tokenList.get().then(res => {
  //     setTableData(res.data.list);
  //   }).catch(err => console.log(err));
  // }, []);


  return (
    <Container>
      <Wrapper>
        <h1>Token 관리</h1>
        <CardHead>
          <div className="sizeBTn">
            <select className="selectCont" aria-label="Default select example">
              <option selected>10개씩 보기 </option>
              <option selected>20개씩 보기</option>
            </select>
            {open && (
              <div className="ContDelte">
                <HighlightOffIcon className="iconDelta" />
                <div className="btnDelte">선택삭제</div>
              </div>
            )}
          </div>
          <div className="CalendarCont">
            <input className="data" placeholder="2022-01-18 ~ 2202-01-28" />
            <CalendarMonthOutlined className="iconCont" />
          </div>
          <div className="SearchCont">
            <input className="search" placeholder="검석" />{" "}
            <SearchOutlined className="iconSerach" />
          </div>

          <div className="excel" onClick={Register}>
            등록
          </div>
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


              {/* {tableData.map((item, indexe => ( */}



              <tr>
                <th>
                  <Checkbox onClick={checkBoxClick} />
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

              {/* // )))} */}



            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr>
                  <th>
                    <Checkbox onClick={checkBoxClick} />
                  </th>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>AKD</td>
                  <td>{item.createdat}</td>
                  <td>264,321</td>
                  <td>155,506</td>
                  <td>155,506</td>
                  <td>
                    {" "}
                    <Switch />{" "}
                  </td>
                </tr>


              ))}

            </tbody>
          </Table>
          {register && (
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
                <button className="regCencel" onClick={Register}>
                  취소
                </button>
                <button className="regOk">확인</button>
              </div>
            </ModalRegister>
          )}
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
`;
const CardHead = styled.div`
  width: 100%;
  display: flex;
  .excel {
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
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .selectCont {
    width: 160px;
    height: 44px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 10px;
  }
  .CalendarCont {
    position: relative;
    display: flex;
    align-items: center;
    .data {
      width: 298px;
      height: 44px;
      background: #ffffff;
      border: 1px solid #d9d9d9;
      box-sizing: border-box;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 20px;
    }
    .iconCont {
      position: relative;
      right: 40px;
    }
  }

  .SearchCont {
    position: relative;
    display: flex;
    align-items: center;
    .search {
      width: 298px;
      height: 44px;
      background: #ffffff;
      border: 1px solid #d9d9d9;
      box-sizing: border-box;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 20px;
    }
    .iconSerach {
      position: relative;
      right: 40px;
    }
  }

  .ContDelte {
    position: relative;
    display: flex;
    align-items: center;

    .btnDelte {
      width: 160px;
      height: 44px;
      background: #ffffff;
      border: 1px solid #d9d9d9;
      box-sizing: border-box;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .iconDelta {
      position: relative;
      left: 40px;
      color: #4876ef;
    }
  }
  .sizeBTn {
    width: 400px;
    display: flex;
    margin-right: auto;
  }
`;

/* .btnDelte {
    width: 160px;
    height: 44px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
    margin-right: 346px;
    margin-left: 14px;
  } */
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
  table {
    cursor: pointer;
  }
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
