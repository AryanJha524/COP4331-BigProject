import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel,
     Checkbox, Link, Grid, Box, Typography, Container, FormControl, FormLabel, FormGroup, FormHelperText,
    } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function GetTime(props) {
  const classes = useStyles();
  const isChecked = props.checked;
  if(isChecked)
    return(
      <Container>
      <form className={classes.container} noValidate>
        <TextField
          id="time"
          label="Select Time"
          type="time"
          defaultValue="09:00"
          className={classes.TextField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300,
          }}
          />
      </form>
      </Container>
    );
    else 
    return (<></>);
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {display: 'flex',
  },
  formControl: {
    margin:theme.spacing(3),
  },
}));

export default function SignIn() {
  const classes = useStyles();

    const [state, setState] = React.useState({
      gilad: true,
      jason: false,
      antoine: false,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
  
    const { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday } = state;
    const error = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday].filter((v) => v).length !== 2;
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
       <Box mt={8}>
        <Avatar classname={classes.avatar} align="center">
          <LockOutlinedIcon/>
        </Avatar>
      </Box>
      </div>
      <Container>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">What days do you come to campus?</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={Monday} onChange={handleChange} name="Monday" />}
              label="Monday"
            />
            <GetTime id="MonTime" checked={state.Monday}></GetTime>
            <FormControlLabel
              control={<Checkbox checked={Tuesday} onChange={handleChange} name="Tuesday" />}
              label="Tuesday"
            />
            <GetTime id="TuesTime" checked={state.Tuesday}></GetTime>
            <FormControlLabel
              control={<Checkbox checked={Wednesday} onChange={handleChange} name="Wednesday" />}
              label="Wednesday"
            />
            <GetTime id="WedTime" checked={state.Wednesday}></GetTime>
            <FormControlLabel
              control={<Checkbox checked={Thursday} onChange={handleChange} name="Thursday" />}
              label="Thursday"
            />
            <GetTime id="ThursTime" checked={state.Thursday}></GetTime>
            <FormControlLabel
              control={<Checkbox checked={Friday} onChange={handleChange} name="Friday" />}
              label="Friday"
            />
            <GetTime id="FriTime" checked={state.Friday}></GetTime>
            <FormControlLabel
              control={<Checkbox checked={Saturday} onChange={handleChange} name="Saturday" />}
              label="Saturday"
            />
            <GetTime id="SatTime" checked={state.Saturday}></GetTime>
            <FormControlLabel
              control={<Checkbox checked={Sunday} onChange={handleChange} name="Sunday" />}
              label="Sunday"
            />
            <GetTime id="SunTime" checked={state.Sunday}></GetTime>
          </FormGroup>
        </FormControl>
      </Container>
    </Container>
  );
}