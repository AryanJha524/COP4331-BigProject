import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';

function createData(id, name, freeSpots)
{
    return { id, name, freeSpots };
}

const parkingGarages = [
    createData(0, 'A', 1623),
    createData(0, 'B', 1259),
    createData(0, 'C', 1852),
    createData(0, 'D', 1241),
    createData(0, 'H', 1284),
    createData(0, 'I', 1231),
];

export default function GarageList()
{
    return(
        <React.Fragment>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        {/* <TableCell>id</TableCell> */}
                        <TableCell>Garage Name</TableCell>
                        <TableCell>Available Spots</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {parkingGarages.map((row) =>(
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.freeSpots}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    )
}