import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// import { Pagination, Stack } from '@mui/material';

const columns = [
  { id: 'name', label: '순서', format: (value) => value.toFixed(2) },
  { id: 'code', label: '지갑주소', format: (value) => value.toFixed(1) },
  {
    id: 'population',
    label: '닉네임',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: '예치량',
    // label: 'Size\u00a0(km\u00b2)',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'item',
    label: 'Item수',
    format: (value) => value.toFixed(2),
  },

  {
    id: 'walet',
    label: '출금량',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'akd',
    label: '보유 AKD',
    format: (value) => value.toFixed(2),
  }, {
    id: 'akg',
    label: '보유 AKG',
    format: (value) => value.toFixed(2),
  }, {
    id: 'userstatic',
    label: '회원상태',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size,walet,  item, akd, akg,userstatic) {
  const density = population / size;
  return { name, code, population, size, density,item, akd,akg,userstatic };
}

const rows = [
  createData('1', "0x8..F7F8 ",'@ioimmoj', "40.169 USDT", "409.169 ßUSDT","22","333","44","4r","55"),
  createData('2', "0q8.e.F7F8 ",'@ioimmojwwqwf', "49.169 USDT", "409.169 ßUSwwwDT", "22","333","44","4r","55"),
  createData('3', "0a8.e.F7F8 ",'@ioimmoawj', "4029.169 USDT", "409.169 ßUSDqweT", "22","333","44","4r","55"),   
  createData('4', "0d8.f..F7F8 ",'@ioimmodwj', "4039.169 USDT", "409.169 ßUSDqqT", "22","333","44","4r","55"),    
  createData('5', "0f8..gg.F7F8 ",'@ioimmodwj', "4029.169 USDT", "409.169 ßUSwwDT", "22","333","44","4r","55"),   
  createData('6', "0g8...ffF7F8 ",'@ioimmowdj', "4091.169 USDT", "409.169 ßUSwDT", "22","333","44","4r","55"),   
  createData('7', "0g8...sdF7F8 ",'@ioimmojwaw', "4019.169 USDT", "409.169 ßUeerewSDT", "22","333","44","4r","55"),  
  createData('8', "0r8...sadF7F8 ",'@ioimmoj', "4029.169 USDT", "409.169 ßUSqwDT", "22","333","44","4r","55"),   
  createData('9', "0w8...asF7F8 ",'@ioimmoasj', "40239.169 USDT", "409.169 ßUSqwDT", "22","333","44","4r","55"),   
  createData('10', "0h8...scaF7F8 ",'@ioimmojs', "409444.169 USDT", "409.169 ßUqwSDT", "22","333","44","4r","55"),   
  createData('11', "0f8...cdsF7F8 ",'@ioimmojwd', "4094.169 USDT", "409.169 ßUqwSDT", "22","333","44","4r","55"),   
  createData('12', "0h8...dcsF7F8 ",'@ioimmssqoj', "4095.169 USDT", "409.169 wqßUSDT", "22","333","44","4r","55"),    
  createData('13', "0v8...dcF7F8 ",'@ioimmesoj', "409.1669 USDT", "409.169 ßUqwSDT", "22","333","44","4r","55"),   
  createData('14', "0z8...dcsF7F8 ",'@ioimemoj', "409.1691 USDT", "409.169 ßUSDT", "22","333","44","4r","55"),   
  createData('15', "0n8...dcscsF7F8 ",'@ioeimmoj', "409.1269 USDT", "409.16sde9 ßUSDT", "22","333","44","4r","55"),   
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
                          {column.format && typeof value === 'number'
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