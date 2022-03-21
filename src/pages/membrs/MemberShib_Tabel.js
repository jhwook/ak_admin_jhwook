import { CalendarMonthOutlined, SearchOutlined } from "@mui/icons-material";
import { Pagination, Stack, TableCell } from "@mui/material";
import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { api } from "../../boot/axios";

export const MemberTable = () => {
  let navigate = useNavigate();
  const [tableData, setTableData] = useState([]);


  useEffect(() => {
    api.get().then(res => {
      setTableData(res.data.list);
      console.log("useState", tableData);
    }).catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <Wrapper>
        <h1>회원현황</h1>
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
            <input className="search" placeholder="검석" />{" "}
            <SearchOutlined className="iconSerach" />
          </div>

          <div className="excel">EXCEL</div>
        </CardHead>

        <WrapperTable>


          <Border />
          <Table responsive="sm">
            <thead>
              <tr>
                <th>순서</th>
                <th>지갑주소</th>
                <th>닉네임</th>
                <th>예치량</th>
                <th>출금량</th>
                <th>Item 수</th>
                <th>보유 AKD</th>
                <th>보유 AKG</th>
                <th>회원상태</th>
                <th>가입일</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr
                  key={index + 1}
                  onClick={() => {
                    navigate("/memberInformation");
                  }}
                >
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.id}</td>
                  <td>409.169 USDT</td>
                  <td>409.169 USDT</td>
                  <td>50</td>
                  <td>1548 AKD</td>
                  <td> 1548 AKD</td>
                  <td>일반</td>
                  <td>{item.createdat}</td>
                </tr>
              ))}
            </tbody>
          </Table>
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

const Ikon = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  top: 168px;
  left: 1520px;
  box-sizing: border-box;
`;
const CalenIkon = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  top: 165px;
  left: 1260px;
  box-sizing: border-box;
`;
const Border = styled.div`
  border: 1px solid #d9d9d9;
`;
const Container = styled.div`
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
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }
  table {
    box-sizing: border-box;
    cursor: pointer;
  }
  
  
 
`;

const WrapperTable = styled.div`
border: 1px solid red;
margin-top: 24px;
max-width: 100%;
max-height: 700px;
overflow-y: scroll;
box-sizing: content-box;

thead{
tr{
  max-width: 50px;
  overflow-x: hidden;
}}
`;
const Paginotion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 24px;
`;
export default MemberTable;
