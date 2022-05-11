import { CalendarMonthOutlined, SearchOutlined } from "@mui/icons-material";
import { Pagination, Stack, TableCell } from "@mui/material";
import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { api } from "../../boot/axios";
import axios from "axios";
import { LocalizationProvider } from "@mui/lab";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import moment from "moment";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { LOGGER, strDot } from "../../utils/common";

export const Transactions = () => {
  let navigate = useNavigate();
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
      .get(api.API_TRANS + `/${page * rows}/${rows}/id/DESC`, {
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
      .get(api.API_USERS + `/${page * rows}/${rows}/id/DESC`, {
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
        <h1>Transactions</h1>
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
          <Table className="sm">
            <thead>
              <tr>
                <th>순서</th>
                <th>지갑주소</th>
                <th>Contract_type</th>
                <th>Tx Hash</th>
                <th>출금량</th>
                <th>User_action</th>
                <th>token_symbol</th>
                <th>날짜</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{strDot(item.username, 3, 13)}</td>
                    <td>{item.auxdata.contract_type}</td>
                    <td>{strDot(item.txhash, 3, 13)}</td>
                    <td>null</td>
                    <td>{item.auxdata.user_action}</td>
                    <td>{item.auxdata.to_token_symbol}</td>
                    <td>{item.createdat}</td>
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
  margin-top: 24px;
  /* max-width: 1300px; */
  max-height: 700px;
  overflow-y: scroll;
  overflow-x: scroll;

  box-sizing: content-box;
`;
const Paginotion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 24px;
`;

export default Transactions;
