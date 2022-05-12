import { CalendarMonthOutlined, Close, SearchOutlined } from "@mui/icons-material";
import { Pagination, Stack } from "@mui/material";
import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { api } from "../../boot/axios";
import { LocalizationProvider } from "@mui/lab";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import moment from "moment";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { strDot } from "../../utils/common";


export const MemberDetailsTable = () => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({});
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
  const [tableData, setTableData] = useState([]);

  function handleClick(item) {
    console.log(item);
    setOpen(() => !open);
    if(!open) setItem(item);
    else setItem({});
  }

  console.log("11", tableData);

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

  const handleRows = (event) => {
    setRows(event.target.value);
  };

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
            </thead>

            <tbody>
              {tableData?.map((item, index) =>( 
              <tr 
                key={index}
                onClick={() => handleClick(item)}
              >
                <td>{item.id}</td>
                <td>{moment(item.createdat).format("YYYY-MM-DD HH:mm:ss")}</td>
                <td>Friends #002</td>
                <td>{item.price ? item.price : 0}</td>
                <td>Or 13</td>
                <td>{JSON.parse(item.auxdata).contract_type}</td>
                <td>진행중</td>
                <td>0</td>
                <td>{item.seller ? item.seller : "-"}</td>
                <td>{item.buyer ? item.buyer : "-"}</td>
                <td>0</td>
                <td>{strDot(item.txhash, 3, 13)}</td>
              </tr>
              ))}
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

      {open && (
        <ModelTab>
          <Head>
            <h1>거래 세부 </h1>
            <Close onClick={handleClick} />{" "}
          </Head>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">거래일시</th>
                <th scope="col">{moment(item.createdat).format('YYYY-MM-DD HH:mm:ss')}</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>마켓</td>
                <td>Market</td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>구분</td>
                <td>구매</td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>판매자</td>
                <td>{item.seller}</td>
              </tr>
            </thead>

            <thead>
              <tr>
                <td>구매자</td>
                <td>{item.buyer}</td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>결제금액</td>
                <td>{item.price ? item.price : 0}</td>
              </tr>
            </thead>

            <thead>
              <tr>
                <td>아이템 이름</td>
                <td>Friends #002</td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>아이템 고유번호</td>
                <td>A20e9894566311</td>
              </tr>
            </thead>
          </table>
        </ModelTab>
      )}
    </Container>
  );
};

const Head = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const ModelTab = styled.div`
  thead {
    border-bottom: 1px solid #f6f6f6;
  }
  position: absolute;
  padding: 50px 34px;
  width: 500px;
  height: 630px;
  left: 1174px;
  top: 350px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  h1 {
    margin-right: auto;
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
// const Ikon = styled.div`
//   position: absolute;
//   width: 14px;
//   height: 14px;
//   top: 225px;
//   left: 1520px;
//   box-sizing: border-box;
// `;
// const CalenIkon = styled.div`
//   position: absolute;
//   width: 14px;
//   height: 14px;
//   top: 225px;
//   left: 1260px;
//   box-sizing: border-box;
// `;
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
  tbody {
    tr:hover {
      background-color: #d9d9d9;
    }
  }
`;


const WrapperTable = styled.div`
  margin-top: 24px;
  max-width: 100%;
  max-height: 700px;
  overflow-y: scroll;
  box-sizing: content-box;

  thead {
    tr {
      max-width: 50px;
      overflow-x: hidden;
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
export default MemberDetailsTable;
