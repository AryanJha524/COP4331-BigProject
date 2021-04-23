import React, { Component } from 'react';
import { Button, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { useHistory, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function Reserve()
{
    //const history = useHistory();
    const classes = useStyles();
    const [garage, setGarage] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState(false);
    // const [statusA, setStatusA] = React.useState(false);
    // const [statusB, setStatusB] = React.useState(false);
    // const [statusC, setStatusC] = React.useState(false);
    // const [statusD, setStatusD] = React.useState(false);
    // const [statusH, setStatusH] = React.useState(false);
    // const [statusI, setStatusI] = React.useState(false);

    const handleChange = (e) => {
        setGarage(e.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    //   function getGarageInfo(gar)
    //   {
    //       var garage = "Garage " + gar;

    //         const getGarageStatus = async event => 
    //         {
    //             var obj = {garageName: garage};
    //             var js = JSON.stringify(obj);

    //             try
    //             {
    //                 const response = await fetch('https://ucfparkyapi.herokuapp.com/isFull',
    //                 {method:'POST', body:js, headers:{'Content-Type': 'application/json'}});

    //                 var txt = await response.text();
    //                 var res = JSON.parse(txt);
    //                 // console.log(res);
    //                 {
    //                     console.log("status for " + garage + ": " + res.isFull);
    //                     switch (res.garageName)
    //                     {
    //                         case 'A':
    //                             setStatusA(res.isFull);
    //                             break;
    //                         case 'B':
    //                             setStatusB(res.isFull);
    //                             break;
    //                         case 'C':
    //                             setStatusC(res.isFull);
    //                             break;
    //                         case 'D':
    //                             setStatusD(res.isFull);
    //                             break;
    //                         case 'H':
    //                             setStatusH(res.isFull);
    //                             break;
    //                         case 'I':
    //                             setStatusI(res.isFull);
    //                             break;
    //                     }
    //                     return res.isFull;
    //                 }
    //             }

    //             catch(e)
    //             {
    //                 console.log("Error: " + e.toString());
    //             }

    //         };

            // const getClosestSpot = async event => {
            //     var obj = {garageName: garage};
            //     var js = JSON.stringify(obj);

            //     try
            //     {
            //         const response = await fetch('https://ucfparkyapi.herokuapp.com/isFull',
            //         {method:'POST', body:js, headers:{'Content-Type': 'application/json'}});
            //         var txt = await response.text();
            //         var res = JSON.parse(txt);
            //         {
            //             console.log("Nearest spot in " + garage + ": " + res.openSpotNumber);
            //             switch(res.garageName)
            //             {
            //                 case 'A':
            //                     setStatusA(res.isFull);
            //                     break;
            //                 case 'B':
            //                     setStatusB(res.isFull);
            //                     break;
            //                 case 'C':
            //                     setStatusC(res.isFull);
            //                     break;
            //                 case 'D':
            //                     setStatusD(res.isFull);
            //                     break;
            //                 case 'H':
            //                     setStatusH(res.isFull);
            //                     break;
            //                 case 'I':
            //                     setStatusI(res.isFull);
            //                     break;
            //             }
            //             return res.openSpotNumber;
            //         }
            //     }
            //     catch(e){
            //         console.log("Error: " + e.toString());
            //     }
           // };

    // var run = getGarageStatus();
    // var runtoo = getClosestSpot();
    //console.log("After getGarageStatus " + run);
  //}

    // const [statusA, setStatusA] = React.useState(() => getGarageInfo('A'));
    // const [statusB, setStatusB] = React.useState(() => getGarageInfo('B'));
    // const [statusC, setStatusC] = React.useState(() => getGarageInfo('C'));
    // const [statusD, setStatusD] = React.useState(() => getGarageInfo('D'));
    // const [statusH, setStatusH] = React.useState(() => getGarageInfo('H'));
    // const [statusI, setStatusI] = React.useState(() => getGarageInfo('I'));

    async function selectGarage(gar)
    {
        var garage = "Garage " + gar;
        var capStatus, spotAvailible;
        var obj = {garageName: garage};
        var js = JSON.stringify(obj);

        try
        {
            const response = await fetch('https://ucfparkyapi.herokuapp.com/isFull',
            {method:'POST', body:js, headers:{'Content-Type': 'application/json'}});

            var txt = await response.text();
            var res = JSON.parse(txt);
            console.log(res);

            capStatus = res.isFull;
            spotAvailible = res.openSpotNumber;
            console.log("garage info for " + garage + ": status(" + capStatus + ")  availible spot(" + spotAvailible + ")");
        }
        catch(e)
        {
            console.log("Error: " + e.toString());
        }

        return (
            <div>
                <a>
                    Cap status: {capStatus}
                </a>
                <a>
                    Nearest availible spot: {spotAvailible}
                </a>
            </div>
        )
    }
    
    // console.log(statusA);
    // console.log(statusB);
    // console.log(statusC);
    // console.log(statusD);
    // console.log(statusH);
    // console.log(statusI);

    return(
        <React.Fragment>
            <Typography>
                current garage reserved from user
                choose to reserve garage here!
            </Typography>
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="choose-garage-label">Garage</InputLabel>
                    <Select
                    labelId="choose-garage-label"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={garage}
                    onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'A'}> A </MenuItem>
                        <MenuItem value={'B'}> B </MenuItem>
                        <MenuItem value={'C'}> C </MenuItem>
                        <MenuItem value={'D'}> D </MenuItem>
                        <MenuItem value={'H'}> H </MenuItem>
                        <MenuItem value={'I'}> I </MenuItem>
                    </Select>
                </FormControl>
                <Button className={classes.button} onClick={selectGarage()}>
                    Select Garage
                </Button>
            </div>
        </React.Fragment>
    )
}
// export default withRouter(Reserve);