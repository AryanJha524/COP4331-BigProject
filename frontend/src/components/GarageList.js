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
    function checkOutput()
    {
        var garage = "Garage A";
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
                   console.log("Received this amount for garage A: " + res.numOpenSpots);
                   setSpotsA( prevSpots => res.numOpenSpots);
                //    spots[0] += 5;
                    // console.log("Spots: + " + spots);
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
                        case 'G':
                            setSpotsG( prevSpots => res.numOpenSpots);
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
    const [spotsA, setSpotsA] = React.useState(() => checkOutput());
    const [spotsB, setSpotsB] = React.useState(() => checkOutput());
    const [spotsC, setSpotsC] = React.useState(() => checkOutput());
    const [spotsD, setSpotsD] = React.useState(() => checkOutput());
    const [spotsG, setSpotsG] = React.useState(() => checkOutput());
    const [spotsH, setSpotsH] = React.useState(() => checkOutput());
    const [spotsI, setSpotsI] = React.useState(() => checkOutput());

    const garages = ['A', 'B', 'C', 'D','G', 'H' ,'I'];
    
    function refreshGarages()
    {
        console.log("refreshing!");
        garages.map(i => updateGarage(i));
    }
    

    const parkingGarages = [
        createData(0, 'A', spotsA, 100),
        createData(0, 'B', spotsB, 100),
        createData(0, 'C', spotsC, 100),
        createData(0, 'D', spotsD, 100),
        createData(0, 'G', spotsG, 100),
        createData(0, 'H', spotsH, 100),
        createData(0, 'I', spotsI, 100),
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