import { CalendarMonthOutlined, SearchOutlined } from "@mui/icons-material";
import { Switch } from "@mui/material";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export const AdminSetting = () => {
  const [open, setOpen] = useState(false);

  let navigation = useNavigate();
  function handleClick() {
    setOpen(() => !open);
  }
  return (
    <Container>
      <Wrapper>
        <h1>관리자 계정관리</h1>
        <CardHead>
          <select className="selectCont" aria-label="Default select example">
            <option selected>10개씩 보기 </option>
            <option selected>20개씩 보기</option>
          </select>
          <div className="CalendarCont">
            <input className="data" placeholder="2022-01-18 ~ 2202-01-28" />
            <CalendarMonthOutlined className="iconCont" />
          </div>
          <div className="SearchCont">
            <input className="search" placeholder="검색" />{" "}
            <SearchOutlined className="iconSerach" />
          </div>

          <div className="excel" onClick={handleClick}>
            등록
          </div>
        </CardHead>

        <WrapperTable>
          <Boreder />
          <Table responsive="sm">
            <thead>
              <tr>
                <th>순서</th>
                <th>관리자 ID</th>
                <th>관리자 PW</th>
                <th>관리자 이름</th>
                <th>등록일</th>
                <th>수정일</th>
                <th>연락처</th>
                <th>그룹명</th>
                <th>사용여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  ioimmoj
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  X@5YfD4p5hzKxq!
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  AkD
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  2022-01-29 11:00:00
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  2022-01-29 11:00:00
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  {" "}
                  010-0000-0000
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  {" "}
                  최고관리자
                </td>
                <td>
                  {" "}
                  <Switch />{" "}
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  ioimmoj
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  X@5YfD4p5hzKxq!
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  AkD
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  2022-01-29 11:00:00
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  2022-01-29 11:00:00
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  {" "}
                  010-0000-0000
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  {" "}
                  최고관리자
                </td>
                <td>
                  {" "}
                  <Switch />{" "}
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  ioimmoj
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  X@5YfD4p5hzKxq!
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  AkD
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  2022-01-29 11:00:00
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  2022-01-29 11:00:00
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  {" "}
                  010-0000-0000
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  {" "}
                  최고관리자
                </td>
                <td>
                  {" "}
                  <Switch />{" "}
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  ioimmoj
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  X@5YfD4p5hzKxq!
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  AkD
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  2022-01-29 11:00:00
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  2022-01-29 11:00:00
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  {" "}
                  010-0000-0000
                </td>
                <td
                  onClick={() => {
                    navigation("/Myprofile");
                  }}
                >
                  {" "}
                  최고관리자
                </td>
                <td>
                  {" "}
                  <Switch />{" "}
                </td>
              </tr>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          </Table>
        </WrapperTable>

        {open && (
          <ModalAdminRegister>
            <h1>관리자 계정 등록</h1>
            <div className="registerCont">
              <div className="regText">관리자 ID</div>
              <div>
                <input className="ModalInput" type="text" />{" "}
              </div>
            </div>
            <Border />
            {/* 2 */}
            <div className="registerCont">
              <div className="regText">관리자 이름</div>
              <div>
                <input className="ModalInput" type="text" />{" "}
              </div>
            </div>
            <Border />
            {/* 3 */}
            <div className="registerCont">
              <div className="regText">비밀번호*</div>
              <div>
                <input className="ModalInput" type="password" />{" "}
              </div>
            </div>
            <Border />
            {/* 4 */}
            <div className="registerCont">
              <div className="regText">비밀번호 재확인*</div>
              <div>
                <input className="ModalInput" type="password " />{" "}
              </div>
            </div>
            <Border />
            {/* 5 */}

            <div className="registerCont">
              <div className="regText">연락처*</div>
              <div>
                <input className="ModalInput" type="text" />{" "}
              </div>
            </div>
            <Border />
            {/* 6 */}
            <div className="registerCont">
              <div className="regText">사용자 그룹*</div>
              <div>
                <select
                  class="form-select"
                  className="ModalSelect"
                  aria-label="Default select example"
                >
                  <option selected>선택</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            {/* 7 */}
            <Border />
            <div className="registerCont">
              <div className="regSwt">사용자 그룹*</div>
              <div>
                <Switch />
              </div>
            </div>

            <Border />

            <div className="regButton">
              <button className="regCencel" onClick={handleClick}>
                취소
              </button>
              <button className="regOk">확인</button>
            </div>
          </ModalAdminRegister>
        )}
      </Wrapper>
    </Container>
  );
};

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
    margin-right: auto;
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
`;
const Border = styled.div`
  border: 1px solid #e6e6e6;
`;
const ModalAdminRegister = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 580px;
  height: 606px;

  left: 1200px;
  top: 300px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 34px 50px 34px 50px;
  .regSwt {
    margin-right: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
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
  .ModalSelect {
    padding-left: 20px;
    width: 321px;
    height: 38px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
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

const Boreder = styled.div`
  border: 1px solid #d9d9d9;
`;
const Container = styled.div`
  margin: 44px;
  display: flex;
  flex-direction: column;
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
    color: #000000;
  }
`;

const WrapperTable = styled.div`
  margin-top: 24px;
  tbody {
    tr:hover {
      background: #f5f5f5;
    }
  }
`;
export default AdminSetting;
