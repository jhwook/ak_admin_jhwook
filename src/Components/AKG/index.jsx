import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Stake", 0x8c4077dfeb3621ed2ddd07f36, 100, 6),
  createData("Lend", 0x8c4077dfeb3621ed2ddd07f36, 1, 1),
  createData("Stake1", 0x8c4077dfeb3621ed2ddd07f36, 1.2, 12.01),
  createData("Stake2", 0x8c4077dfeb3621ed2ddd07f36, 1, 1.01),
  createData("Stake3", 0x8c4077dfeb3621ed2ddd07f36, 0.6, 0.61),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>자급타입</TableCell>
            <TableCell>지갑주소</TableCell>
            <TableCell align="right">지갑수량</TableCell>
            <TableCell align="right">지급그맥</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
