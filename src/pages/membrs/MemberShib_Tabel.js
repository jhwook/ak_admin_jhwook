import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "antd";
// import { Pagination, Stack } from '@mui/material';

const columns = [
  { id: "name", label: "순서", format: (value) => value.toFixed(2) },
  { id: "code", label: "지갑주소", format: (value) => value.toFixed(1) },
  {
    id: "population",
    label: "닉네임",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "예치량",
    // label: 'Size\u00a0(km\u00b2)',
    format: (value) => value.toLocaleString("en-US"),
  },
{
    id: "walet",
    label: "출금량",
    format: (value) => value.toFixed(2),
  },
  {
    id: "item",
    label: "Item 수",
    format: (value) => value.toFixed(2),
  },

  
  {
    id: "akd",
    label: "보유 AKD",
    format: (value) => value.toFixed(2),
  },
  {
    id: "akg",
    label: "보유 AKG",
    format: (value) => value.toFixed(2),
  },
  {
    id: "userstatic",
    label: "회원상태",
    format: (value) => value.toFixed(2),
  },
  {
    id: "register",
    label: "가입일",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  name,
  code,
  population,
  size,
  walet,
  item,
  akd,
  akg,
  userstatic,
  register,
) {
  const density = population / size;
  return { name, code, population, size, walet, density, item, akd, akg, userstatic,register };
}

const rows = [
 
  createData(
    "1",
    "0g8...sdF7F8 ",
    "@ioimmojwaw",
    "459.169 USDT",
    "409.169 USDT",
    "50",
    "1548 AKD",
    "1548 AKG",
    "일반",
    "2022-01-29 11:00:00"
  ),
  createData(
    "2",
    "0g8...sdF7F8 ",
    "@ioimmojwaw",
    "459.169 USDT",
    "409.169 USDT",
    "50",
    "1548 AKD",
    "1548 AKG",
    "일반",
    "2022-01-29 11:00:00"
  ),
  createData(
    "3",
    "0g8...sdF7F8 ",
    "@ioimmojwaw",
    "459.169 USDT",
    "409.169 USDT",
    "50",
    "1548 AKD",
    "1548 AKG",
    "일반",
    "2022-01-29 11:00:00"
  ),
  createData(
    "4",
    "0g8...sdF7F8 ",
    "@ioimmojwaw",
    "459.169 USDT",
    "409.169 USDT",
    "50",
    "1548 AKD",
    "1548 AKG",
    "일반",
    "2022-01-29 11:00:00"
  ),
  createData(
    "5",
    "0g8...sdF7F8 ",
    "@ioimmojwaw",
    "459.169 USDT",
    "409.169 USDT",
    "50",
    "1548 AKD",
    "1548 AKG",
    "일반",
    "2022-01-29 11:00:00"
  ),
  createData(
    "6",
    "0g8...sdF7F8 ",
    "@ioimmojwaw",
    "459.169 USDT",
    "409.169 USDT",
    "50",
    "1548 AKD",
    "1548 AKG",
    "일반",
    "2022-01-29 11:00:00"
  ),
  createData(
    "7",
    "0g8...sdF7F8 ",
    "@ioimmojwaw",
    "459.169 USDT",
    "409.169 USDT",
    "50",
    "1548 AKD",
    "1548 AKG",
    "일반",
    "2022-01-29 11:00:00"
  ),
  
];

export default function MembersTabele() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
    <Paper sx={{  width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}
