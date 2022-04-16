import React from "react";
import { styled } from "@mui/material/styles";
import Table from '@mui/material/Table'
import TableBody from "@mui/material/TableBody";
import TableCell,{tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const TableStyledCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.tomato,
        color: theme.palette.black,
    },
    [`&.${tableCellClasses.head}`]: {
        fontSize: 15
    }
}))

const TableStyledRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&.last-child td, &:last-child th': {
        border: 0
    }
}))


export const Tables = () => {
    const rows = [
        {
            id:1,
            country: "India",
            city: "Mumbai",
            population: 2228288,
            Edit : "edit",
            Delete: "delete"
        },
        {
            id:2,
            country: "India",
            city: "Kolkata",
            population: 252225,
            Edit : "edit",
            Delete: "delete"
        },
        {
            id:3,
            country: "India",
            city: "Chennai",
            population: 5454545,
            Edit : "edit",
            Delete: "delete"
        },
        {
            id:4,
            country: "India",
            city: "Mumbai",
            population: 1511122,
            Edit : "edit",
            Delete: "delete"
        },
        {
            id:4,
            country: "India",
            city: "Nainital",
            population: 23232323,
            Edit : "edit",
            Delete: "delete"
        }
    ]

    return (
        <div>
            <TableContainer>
                <Table sx={{minWidth: 600}} aria-label="custom table">
                    <TableHead>
                        <TableRow>
                            <TableStyledCell>ID</TableStyledCell>
                            <TableStyledCell align="right">COUNTRY</TableStyledCell>
                            <TableStyledCell align="right">CITY</TableStyledCell>
                            <TableStyledCell align="right">POPULATION</TableStyledCell>
                            <TableStyledCell align="right">EDIT</TableStyledCell>
                            <TableStyledCell align="right">DELETE</TableStyledCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                          <TableStyledRow key = {row.id}>
                            <TableStyledCell component="th" scope="row">{row.id}</TableStyledCell>
                            <TableStyledCell align="right">{row.country}</TableStyledCell>
                            <TableStyledCell align="right">{row.city}</TableStyledCell>
                            <TableStyledCell align="right">{row.population}</TableStyledCell>
                            <TableStyledCell align="right">{row.Edit}</TableStyledCell>
                            <TableStyledCell align="right">{row.Delete}</TableStyledCell>
                          </TableStyledRow>  
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}