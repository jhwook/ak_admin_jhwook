// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import { Button } from "antd";
// // import { Pagination, Stack } from '@mui/material';

// const columns = [
//   { id: "name", label: "순서", format: (value) => value.toFixed(2) },
//   { id: "code", label: "지갑주소", format: (value) => value.toFixed(1) },
//   {
//     id: "population",
//     label: "닉네임",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "size",
//     label: "예치량",
//     // label: 'Size\u00a0(km\u00b2)',
//     format: (value) => value.toLocaleString("en-US"),
//   },
// {
//     id: "walet",
//     label: "출금량",
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: "item",
//     label: "Item 수",
//     format: (value) => value.toFixed(2),
//   },

  
//   {
//     id: "akd",
//     label: "보유 AKD",
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: "akg",
//     label: "보유 AKG",
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: "userstatic",
//     label: "회원상태",
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: "register",
//     label: "가입일",
//     format: (value) => value.toFixed(2),
//   },
// ];

// function createData(
//   name,
//   code,
//   population,
//   size,
//   walet,
//   item,
//   akd,
//   akg,
//   userstatic,
//   register,
// ) {
//   const density = population / size;
//   return { name, code, population, size, walet, density, item, akd, akg, userstatic,register };
// }

// const rows = [
 
//   createData(
//     "1",
//     "0g8...sdF7F8 ",
//     "@ioimmojwaw",
//     "459.169 USDT",
//     "409.169 USDT",
//     "50",
//     "1548 AKD",
//     "1548 AKG",
//     "일반",
//     "2022-01-29 11:00:00"
//   ),
//   createData(
//     "2",
//     "0g8...sdF7F8 ",
//     "@ioimmojwaw",
//     "459.169 USDT",
//     "409.169 USDT",
//     "50",
//     "1548 AKD",
//     "1548 AKG",
//     "일반",
//     "2022-01-29 11:00:00"
//   ),
//   createData(
//     "3",
//     "0g8...sdF7F8 ",
//     "@ioimmojwaw",
//     "459.169 USDT",
//     "409.169 USDT",
//     "50",
//     "1548 AKD",
//     "1548 AKG",
//     "일반",
//     "2022-01-29 11:00:00"
//   ),
//   createData(
//     "4",
//     "0g8...sdF7F8 ",
//     "@ioimmojwaw",
//     "459.169 USDT",
//     "409.169 USDT",
//     "50",
//     "1548 AKD",
//     "1548 AKG",
//     "일반",
//     "2022-01-29 11:00:00"
//   ),
//   createData(
//     "5",
//     "0g8...sdF7F8 ",
//     "@ioimmojwaw",
//     "459.169 USDT",
//     "409.169 USDT",
//     "50",
//     "1548 AKD",
//     "1548 AKG",
//     "일반",
//     "2022-01-29 11:00:00"
//   ),
//   createData(
//     "6",
//     "0g8...sdF7F8 ",
//     "@ioimmojwaw",
//     "459.169 USDT",
//     "409.169 USDT",
//     "50",
//     "1548 AKD",
//     "1548 AKG",
//     "일반",
//     "2022-01-29 11:00:00"
//   ),
//   createData(
//     "7",
//     "0g8...sdF7F8 ",
//     "@ioimmojwaw",
//     "459.169 USDT",
//     "409.169 USDT",
//     "50",
//     "1548 AKD",
//     "1548 AKG",
//     "일반",
//     "2022-01-29 11:00:00"
//   ),
  
// ];

// export default function CurrentTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   // const handleChangePage = (event, newPage) => {
//   //   setPage(newPage);
//   // };

//   // const handleChangeRowsPerPage = (event) => {
//   //   setRowsPerPage(+event.target.value);
//   //   setPage(0);
//   // };

//   return (
//     <Paper sx={{  width: "100%", overflow: "hidden" }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === "number"
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       {/* <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       /> */}
//     </Paper>
//   );
// }
import { Pagination, Stack } from '@mui/material'
import React from 'react'
import { Table } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'

export const Sell = () => {
  return (
    <Container>
 
      <Wrapper>  
     
      <CardHead>
      <select aria-label="Default select example">
  <option selected>10개씩 보기</option>
  <option selected>20개씩 보기</option>
</select>

<input className='data' placeholder='2022-01-18 ~ 2202-01-28'></input>
<input className='search' placeholder='검석'></input>
<button className='excel'>EXCEL</button>
      </CardHead>

<WrapperTable>

<Table responsive="sm">
    <thead>
      <tr>
        <th>순서</th>
        <th>거래일시</th>
        <th>계정</th>
        <th>출금 Token</th>
        <th>출금금액</th>
        <th>체결상태</th>
        <th>수수료</th>
        <th>정산금액</th>
        <th>Transaction</th>
      </tr>
      
    </thead>
    <tbody>
      
    
      <tr>
        <td>1</td>
        <td>2022-01-12 09:50:11</td>
        <td>@ioisdfsfsdgsg</td>
        <td>USDT</td>
        <td>100</td>
        <td>진행중</td>
        <td>0.25 AKD</td>
        <td> 100.25 AKD</td>
        <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>
       
      </tr>
      <tr>

      <td>2</td>
        <td>2022-01-12 09:50:11</td>
        <td>@ioisdfsfsdgsg</td>
        <td>USDT</td>
        <td>100</td>
        <td>진행중</td>
        <td>0.25 AKD</td>
        <td> 100.25 AKD</td>
        <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>
       
      </tr>

      <tr>

<td>3</td>
  <td>2022-01-12 09:50:11</td>
  <td>@ioisdfsfsdgsg</td>
  <td>USDT</td>
  <td>100</td>
  <td>진행중</td>
  <td>0.25 AKD</td>
  <td> 100.25 AKD</td>
  <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>
 
</tr>

<tr>

<td>4</td>
  <td>2022-01-12 09:50:11</td>
  <td>@ioisdfsfsdgsg</td>
  <td>USDT</td>
  <td>100</td>
  <td>진행중</td>
  <td>0.25 AKD</td>
  <td> 100.25 AKD</td>
  <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>
 
</tr>

<tr>

<td>5</td>
  <td>2022-01-12 09:50:11</td>
  <td>@ioisdfsfsdgsg</td>
  <td>USDT</td>
  <td>100</td>
  <td>진행중</td>
  <td>0.25 AKD</td>
  <td> 100.25 AKD</td>
  <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>
 
</tr>

<tr>

<td>6</td>
  <td>2022-01-12 09:50:11</td>
  <td>@ioisdfsfsdgsg</td>
  <td>USDT</td>
  <td>100</td>
  <td>진행중</td>
  <td>0.25 AKD</td>
  <td> 100.25 AKD</td>
  <td> 0x5906a5c0e5740x5906a5c0e5a5e...</td>
 
</tr>
      
    </tbody>
  </Table>

  {/* <BuysellTable/> */}
</WrapperTable>
<Paginotion>
      <Stack>
          <Pagination count={2} shape="rounded" />
        </Stack>
  </Paginotion>
      </Wrapper> 
    
    </Container>
  )
}
const Container =styled.div`
.buysell{
  display: flex;
  h1{
    margin-left: 20px;
  }
}

margin: 44px;
display: flex;
flex-direction: column;
.data{
  background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
width: 298px;
height: 44px;
margin-right: 14px;
padding: 20px;

}
.search{
  width: 240px;
height: 44px;
  background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
margin-right: 24px;
padding: 20px;

}
.excel{
  border: none;
width: 162px;
height: 44px;
background: #4876EF;
border-radius: 8px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #FFFFFF;

}
`
const CardHead = styled.div`
width: 100%;
height: 44px;
select{
  margin-right: 526px;
  width: 160px;
height: 44px;

background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
}

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
flex-direction: column;
width: 1526px;
height: 734px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;
`

const WrapperTable = styled.div`
margin-top: 24px;
table{
  tr:hover{
background-color: #D9D9D9;
  }
}

`
const Paginotion =styled.div`
display: flex ;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 24px;

`
export default Sell