import { CalendarMonthOutlined, SearchOutlined } from '@mui/icons-material';
import { Pagination, TableCell } from '@mui/material';
import { React, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { api } from '../../boot/axios';
import TextField from '@mui/material/TextField';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import moment from 'moment';

export const MemberTable = () => {
  const [value, setValue] = useState(new Date());
  const [date, setDate] = useState({
    date0: null,
    date1: null,
  });
  let navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [rows, setRows] = useState(10);
  const [searchkey, setSearchKey] = useState(null);

  console.log('11', tableData);
  //pageNation

  useEffect(() => {
    setTableData([]);
    axios
      .get(api.API_USERS + `/${page * rows}/${rows}/id/DESC`, {
        params: { date0: date.date0, date1: date.date1, searchkey: searchkey },
      })
      .then((res) => {
        const arr = res.data.list;
        res.data.list.map((data, index) => {
          axios
            .get(`${api.API_COUNT}/items/username/${data.username}`)
            .then(({ data }) => {
              let { count } = data;
              arr[index]['itemcount'] = count;
              setTableData((pre) => [...arr]);
            });
        });
        console.log('res', res);
        setCount(res.data.payload.count);
        setTotalPages(Math.ceil(res.data.payload.count / rows));
      })
      .catch((err) => console.log(err));
  }, [page, rows, value, searchkey]);

  const handleRows = (event) => {
    setRows(event.target.value);
  };

  const onclick_search_Btn = () => {
    axios
      .get(api.API_USERS + `/${page * rows}/${rows}/id/DESC`, {
        params: { date0: date.date0, date1: date.date1, searchkey: searchkey },
      })
      .then((res) => {
        console.log('onclick', res);
        setCount(res.data.payload.count);
        setTableData(res?.data?.list);
        setTotalPages(Math.ceil(res.data.payload.count / rows));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Wrapper>
        <h1>회원현황</h1>
        <CardHead>
          <select
            className="selectCont"
            aria-label="Default select example"
            value={rows}
            onChange={handleRows}
          >
            <option value={10}>10개씩 보기 </option>
            <option value={20}>20개씩 보기</option>
          </select>
          <div className="CalendarCont">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="03/22/2022"
                value={date.date0}
                minDate={new Date('2017-01-01')}
                onChange={(newValue) => {
                  setDate({
                    ...date,
                    date0: moment(newValue).format('YYYY-MM-DD HH:mm:ss'),
                  });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <DesktopDatePicker
                label="03/22/2022"
                value={date.date1}
                minDate={new Date('2017-01-01')}
                onChange={(newValue) => {
                  setDate({
                    ...date,
                    date1: moment(newValue).format('YYYY-MM-DD HH:mm:ss'),
                  });
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
            />{' '}
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
          <Table>
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
              {tableData?.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    navigate('/memberInformation', { state: item });
                  }}
                >
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.nickname}</td>
                  <td>{item.stakeamout ? item.stakeamout : '-'}</td>
                  <td>-</td>
                  <td>{item.itemcount}</td>
                  <td>need akd queries</td>
                  <td>need akd queries</td>
                  <td>일반</td>
                  <td>
                    {moment(item.createdat).format('YYYY-MM-DD HH:mm:ss')}
                  </td>
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
              ''
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
    height: 58px;
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
    margin-right: 14px;
    gap: 20px;
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
      height: 58px;
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
      cursor: pointer;
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
export default MemberTable;
