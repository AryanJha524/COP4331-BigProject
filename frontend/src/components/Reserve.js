import React, { Component } from 'react';
import { Button, Typography, InputLabel, MenuItem, FormControl, Select, Snackbar } from '@material-ui/core';
import { useHistory, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    snackRoot: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
}));

export default function Reserve()
{
    //const history = useHistory();
    const classes = useStyles();
    const [garage, setGarage] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);
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

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway'){
          return;
        }
        setOpen(false);
        setSnack(false);
    }

    async function getGarageData(gar)
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
            //console.log(res);

            capStatus = res.isFull;
            spotAvailible = res.openSpotNumber;
            const data = {capStatus, spotAvailible};
            //console.log("garage info for " + garage + ": status(" + capStatus + ")  availible spot(" + spotAvailible + ")");
            console.log(data);
            console.log("is garage " + gar +" full: " + data.capStatus);
            setStatus(data.capStatus);
            console.log("The next open spot in garage " + gar + " is: " + data.spotAvailible); 
            setSpotNum(data.spotAvailible);
            return res;
            
        }
        catch(e)
        {
            console.log("Error: " + e.toString());
        }
    }

    function GarageData(props)
    {
        getGarageData(props.garage);
        console.log("==================")
        console.log("Returning with Status: " + status + " spotNum: " + spotNum)
        return (props.trigger) ? ((status === false) ?
        (
                <div className={classes.snackRoot}>
                    <Snackbar
                      open={snack}
                      onClose={handleSnackClose}
                      autoHideDuration={3000}
                    >
                      <Alert severity="success" onClose={handleSnackClose}>
                          Yay! This garage is open for parking!
                          Garage Status: {status}
                          Closest Available Spot: {spotNum}
                      </Alert>
                    </Snackbar>
                </div>)
        :(
                <div className={classes.snackRoot}>
                    <Snackbar
                    open={snack}
                    onClose={handleSnackClose}
                    autoHideDuration={3500}
                    >
                    <Alert severity="error" onClose={handleSnackClose}>
                        Sorry! This garage is full. Choose another garage.
                    </Alert>
                    </Snackbar>
                </div>
            )
        ) :<></>
    }

    const [snack, setSnack] = React.useState(false);
    const [spotNum, setSpotNum] = React.useState(-999);
    const [status, setStatus] = React.useState(false);

    return(
        <React.Fragment>
            <Typography variant="h6" align="center">
                Find an available spot!
            </Typography>
            <div align="center">
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
                <Button className={classes.button} type="submit"
                variant="contained" color="primary" onClick={() => setSnack(true)}>
                    Select Garage
                </Button>
                <GarageData trigger={snack} setTrigger={setSnack} garage={garage} >here</GarageData>
            </div>
        </React.Fragment>
    )
}