import React from 'react';
import { Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DataTable = ({ data, handleDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>שם</TableCell>
            <TableCell>תפקיד</TableCell>
            <TableCell>דוא"ל</TableCell>
            <TableCell>מחיקה</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
                <IconButton aria-label="delete" onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
