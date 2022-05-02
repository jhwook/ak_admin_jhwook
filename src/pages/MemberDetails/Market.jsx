import { CalendarMonthOutlined, SearchOutlined } from "@mui/icons-material";
import { Pagination, Stack } from "@mui/material";
import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { api } from "../../boot/axios";
import axios from "axios";
import { LocalizationProvider } from "@mui/lab";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import moment from "moment";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { LOGGER, strDot } from "../../utils/common";

export const Market = () => {
  const [tableData, setTableData] = useState([]);
  const [value, setValue] = useState(new Date());
  const [date, setDate] = useState({
    date0: null,
    date1: null,
  });
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [rows, setRows] = useState(10);
  const [searchkey, setSearchKey] = useState(null);

  useEffect(() => {
    axios
      .get(api.API_TRANSATION + `/${page * rows}/${rows}/id/DESC`, {
        params: { date0: date.date0, date1: date.date1, searchkey: searchkey },
      })
      .then((res) => {
        console.log("res", res);
        setCount(res.data.payload.count);
        setTableData(res?.data?.list);
        setTotalPages(Math.ceil(res.data.payload.count / rows));
      })
      .catch((err) => console.log(err));
  }, [page, rows, value, searchkey]);

  const onclick_search_Btn = () => {
    axios
      .get(api.API_TRANSATION + `/${page * rows}/${rows}/id/DESC`, {
        params: { date0: date.date0, date1: date.date1, searchkey: searchkey },
      })
      .then((res) => {
        console.log("onclick", res);
        setCount(res.data.payload.count);
        setTableData(res?.data?.list);
        setTotalPages(Math.ceil(res.data.payload.count / rows));
      })
      .catch((err) => console.log(err));
  };

  const handleRows = (event) => {
    setRows(event.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <CardHead>
          <select className="selectCont" aria-label="Default select example" value={rows} onChange={handleRows}>
            <option value={10}>10개씩 보기 </option>
            <option value={20}>20개씩 보기</option>
          </select>
          <div className="CalendarCont">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="03/22/2022"
                value={date.date0}
                minDate={new Date("2017-01-01")}
                onChange={(newValue) => {
                  setDate({ ...date, date0: moment(newValue).format("YYYY-MM-DD HH:mm:ss") });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <DesktopDatePicker
                label="03/22/2022"
                value={date.date1}
                minDate={new Date("2017-01-01")}
                onChange={(newValue) => {
                  setDate({ ...date, date1: moment(newValue).format("YYYY-MM-DD HH:mm:ss") });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className="SearchCont">
            <input
              className="search"
              placeholder="검색"
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
            />{" "}
            <SearchOutlined
              className="iconSerach"
              onClick={() => {
                onclick_search_Btn();
              }}
            />
          </div>

          <div className="excel">EXCEL</div>
        </CardHead>

        <WrapperTable>
          <Border />
          <Table responsive="sm">
            <thead>
              <tr>
                <th>순서</th>
                <th>거래일시</th>
                <th>아이템</th>
                <th>가격</th>
                <th>거래번호</th>
                <th>거래방식</th>
                <th>체결상태</th>
                <th>결제금액</th>
                <th>판매자</th>
                <th>구매자</th>
                <th>수수료</th>
                <th>Transaction</th>
              </tr>
              {/* "{"toAmount":"71.57757","rewardTokenContract":"0xa1680defda833b373a737bb254de5aaff5de7889",
              "rewardTokenSymbol":"AKG","maxfee":"12000000","appver":"20220411-2259v0.1.0"
              ,"nettype":"KLAY_MAINNET"}" */}
            </thead>
            <tbody>
              {tableData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{strDot(item.createdat, 10)}</td>
                    <td>Friends #002</td>
                    <td>{item.price ? item.price : 0}</td>
                    <td>Or 13</td>
                    <td>{item.auxdata.contract_type}</td>
                    <td>진행중</td>
                    <td> 100 AKD</td>
                    <td>{item.seller ? item.seller : "null"}</td>
                    <td>{item.buyer ? item.buyer : "null"}</td>
                    <td>0.25 AKD</td>
                    <td>{strDot(item.txhash, 3, 9)}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </WrapperTable>
        <Paginotion>
          <Stack>
            {totalPages > 1 ? (
              <Pagination
                onChange={(e, v) => {
                  setPage(v - 1);
                }}
                count={totalPages}
                showFirstButton
                showLastButton
              />
            ) : (
              ""
            )}
          </Stack>
        </Paginotion>
      </Wrapper>
    </Container>
  );
};

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
  height: 529px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  tbody {
    tr:hover {
      background-color: #d9d9d9;
    }
  }
  table {
    cursor: pointer;
  }
`;

const WrapperTable = styled.div`
  margin-top: 24px;
`;
const Paginotion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 24px;
`;
export default Market;
