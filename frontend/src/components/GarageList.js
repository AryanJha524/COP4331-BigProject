import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';

function createData(id, name, freeSpots, totalSpots)
{
    return { id, name, freeSpots, totalSpots };
}


function getA()
{
    return 5;
}


export default function GarageList()
{
    
    function updateGarage(gar)
    {
        var garage = "Garage " + gar;
        // console.log("Hello");
        // console.log(parkingGarages);
        
    
        const getSpots = async event =>
        {
            // event.preventDefault();
        
            var obj = {garageName: garage};
            var js = JSON.stringify(obj);
    
            try
            {
                const response = await fetch('http://localhost:5000/garages/openSpots',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
    
                var txt = await response.text();
                var res = JSON.parse(txt);
                console.log(res);
                {
                   console.log("Received this amount for " + garage + ": " + res.numOpenSpots);
                   switch (gar)
                   {
                        case 'A':
                           setSpotsA( prevSpots => res.numOpenSpots);
                           break;
                        case 'B':
                            setSpotsB( prevSpots => res.numOpenSpots);
                            break;
                        case 'C':
                            setSpotsC( prevSpots => res.numOpenSpots);
                            break;
                        case 'D':
                            setSpotsD( prevSpots => res.numOpenSpots);
                            break;
                        case 'H':
                            setSpotsH( prevSpots => res.numOpenSpots);
                            break;
                        case 'I':
                            setSpotsI( prevSpots => res.numOpenSpots);
                            break;
                   }
                    return res.numOpenSpots;
                }
            }
            catch(e)
            {
                console.log("ERROR: " + e.toString());
            }
    
        };
        var run = getSpots();
        // console.log("After getSpots");
    
    }
    const [spotsA, setSpotsA] = React.useState(() => updateGarage('A'));
    const [spotsB, setSpotsB] = React.useState(() => updateGarage('B'));
    const [spotsC, setSpotsC] = React.useState(() => updateGarage('C'));
    const [spotsD, setSpotsD] = React.useState(() => updateGarage('D'));
    const [spotsH, setSpotsH] = React.useState(() => updateGarage('H'));
    const [spotsI, setSpotsI] = React.useState(() => updateGarage('I'));

    const garages = ['A', 'B', 'C', 'D', 'H' ,'I'];
    
    function refreshGarages()
    {
        console.log("refreshing!");
        garages.map(i => updateGarage(i));
    }
    

    const parkingGarages = [
        createData(0, 'A', spotsA, 1623),
        createData(0, 'B', spotsB, 1259),
        createData(0, 'C', spotsC, 1852),
        createData(0, 'D', spotsD, 1241),
        createData(0, 'H', spotsH, 1284),
        createData(0, 'I', spotsI, 1231),
    ];
    return(
        <React.Fragment>
            <Button onClick= {refreshGarages}>Refresh</Button>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        {/* <TableCell>id</TableCell> */}
                        <TableCell>Garage Name</TableCell>
                        <TableCell>Available Spots</TableCell>
                        <TableCell>Total Spots</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {parkingGarages.map((row) =>(
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.freeSpots}</TableCell>
                            <TableCell>{row.totalSpots}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    )
}