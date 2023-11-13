import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export function BasicTable({ data, blueCol, boldCol }) {
  const keys = Object.keys(data[0]); // ['', '']
  const upperCaseKeys = keys.map((key) => key.toUpperCase());

  const rows = data.map((item) => {
    return Object.values(item); //
  });

  const blueColumnStr =
    blueCol &&
    blueCol
      .map((num) => {
        return `&:nth-of-type(${num})`;
      })
      .join(",");
  const boldColumnStr =
    boldCol &&
    boldCol
      .map((num) => {
        return `&:nth-of-type(${num})`;
      })
      .join(",");

  return (
    <TableContainer component={Paper} className="basic-table">
      <Table
        sx={{
          minWidth: 650,
          // maxWidth: "80%",
          th: {
            border: 0,
            backgroundColor: "#F3F4F6FF",
            fontWeight: "bold",
            fontFamily: "Montserrat",
          },
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {upperCaseKeys.map((key, index) => {
              return <TableCell key={index}>{key}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:nth-of-type(even) td": {
                  border: 0,
                  backgroundColor: "#F3F4F6FF",
                },
              }}
            >
              {row.map((cell, index) => {
                return (
                  <TableCell
                    key={index}
                    sx={{
                      fontFamily: "Poppins",
                      [boldColumnStr]: {
                        fontWeight: "bold",
                      },
                      [blueColumnStr]: {
                        color: "#6355D8FF",
                        // backgroundColor: "#F3F2FCFF",
                        // borderRadius: "14px",
                      },
                    }}
                  >
                    {cell}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
