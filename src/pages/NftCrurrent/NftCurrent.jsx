import { CalendarMonthOutlined, SearchOutlined } from "@mui/icons-material";
import { Pagination, Stack } from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const NftCurrent = () => {
  let navigate = useNavigate();

  return (
    <Container>
      <Card>
        <ItemCard>
          <Title>
            {" "}
            <h1>Item</h1>
            <div className="data">금일 등록수 </div>
            <div className="data">누적 MINTING 수 </div>
          </Title>
          <Number>
            {" "}
            <p>25</p> <h1>15,646,860 </h1>{" "}
          </Number>
        </ItemCard>
        <MintingCard>
          <Title>
            {" "}
            <h1>Item</h1>
            <div className="data">금일 등록수 </div>
            <div className="data">누적 MINTING 수 </div>
          </Title>
          <Number>
            {" "}
            <p>25</p> <h1>15,646,860 </h1>{" "}
          </Number>
        </MintingCard>
      </Card>
      <Wrapper>
        <h1>NFT 현황</h1>
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
          <Table responsive="sm">
            <thead>
              <tr>
                <th>순서</th>
                <th>아이템</th>
                <th>아이템 번호</th>
                <th>가격</th>
                <th>판매방식</th>
                <th>Contract</th>
                <th>상태</th>
                <th>Owner</th>
                <th>등록일</th>
                <th>수정일</th>
              </tr>
            </thead>
            <tbody>
              <tr
                onClick={() => {
                  navigate("/iteminformation");
                }}
              >
                <td>1</td>
                <td>Friends #0002</td>
                <td>@A20e989...</td>
                <td>100 AKD</td>
                <td>고정가</td>
                <td>0x5906a5c0e5747ee...</td>
                <td>진행중</td>
                <td>@ioimmoj</td>
                <td> 2022-01-12 09:50:11</td>
                <td> 2022-01-12 09:50:11</td>
              </tr>

              <tr
                onClick={() => {
                  navigate("/iteminformation");
                }}
              >
                <td>2</td>
                <td>Friends #0002</td>
                <td>@A20e989...</td>
                <td>100 AKD</td>
                <td>고정가</td>
                <td>0x5906a5c0e5747ee...</td>
                <td>진행중</td>
                <td>@ioimmoj</td>
                <td> 2022-01-12 09:50:11</td>
                <td> 2022-01-12 09:50:11</td>
              </tr>

              <tr
                onClick={() => {
                  navigate("/iteminformation");
                }}
              >
                <td>3</td>
                <td>Friends #0002</td>
                <td>@A20e989...</td>
                <td>100 AKD</td>
                <td>고정가</td>
                <td>0x5906a5c0e5747ee...</td>
                <td>진행중</td>
                <td>@ioimmoj</td>
                <td> 2022-01-12 09:50:11</td>
                <td> 2022-01-12 09:50:11</td>
              </tr>

              <tr
                onClick={() => {
                  navigate("/iteminformation");
                }}
              >
                <td>4</td>
                <td>Friends #0002</td>
                <td>@A20e989...</td>
                <td>100 AKD</td>
                <td>고정가</td>
                <td>0x5906a5c0e5747ee...</td>
                <td>진행중</td>
                <td>@ioimmoj</td>
                <td> 2022-01-12 09:50:11</td>
                <td> 2022-01-12 09:50:11</td>
              </tr>

              <tr
                onClick={() => {
                  navigate("/iteminformation");
                }}
              >
                <td>5</td>
                <td>Friends #0002</td>
                <td>@A20e989...</td>
                <td>100 AKD</td>
                <td>고정가</td>
                <td>0x5906a5c0e5747ee...</td>
                <td>진행중</td>
                <td>@ioimmoj</td>
                <td> 2022-01-12 09:50:11</td>
                <td> 2022-01-12 09:50:11</td>
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
              <td></td>
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

const WrapperTable = styled.div`
  margin-top: 24px;
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

const Number = styled.div`
  position: relative;
  left: 56px;
  top: 25px;
  display: flex;
  flex-direction: column;
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
  }
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;

    color: #000000;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }
  .data {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #7a7a7a;
  }
`;
const Container = styled.div`
  margin: 44px;
  display: flex;
  flex-direction: column;
`;
const ItemCard = styled.div`
  display: flex;
  padding: 34px 0px 0 54px;
  margin-right: 30px;
  width: 748px;
  height: 210px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;
const MintingCard = styled.div`
  display: flex;
  width: 748px;
  padding: 34px 0px 0 54px;

  height: 210px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;
const Card = styled.div`
  display: flex;
  margin-bottom: 40px;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 1526px;
  height: 622px;
  left: 274px;
  top: 358px;

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
  }
`;
export default NftCurrent;
