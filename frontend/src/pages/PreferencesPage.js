import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel,
     Checkbox, Link, Grid, Box, Typography, Container, FormControl, FormLabel, FormGroup, FormHelperText, InputLabel,
     MenuItem, Select, AppBar, Toolbar, Switch, 
    } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons';


// Username & password changes


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
function GetGarage(props)
{
  const classes = useStyles();
  const isChecked = props.checked;
  if(isChecked)
    return(
      <Container>
        <div>
      <FormControl variant="outlined" className={classes.ageFormControl}>
        <InputLabel id="Garage">Prefered Garage</InputLabel>
        <Select
          labelId="Garage"
          id="Garage-Selection"
          label="Prefered Garage"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Garage A</MenuItem>
          <MenuItem value={20}>Garage B</MenuItem>
          <MenuItem value={30}>Garage C</MenuItem>
          <MenuItem value={40}>Garage D</MenuItem>
          <MenuItem value={50}>Garage G</MenuItem>
          <MenuItem value={60}>Garage H</MenuItem>
        </Select>
      </FormControl>
    </div>
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
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  ageFormControl: {
    margin:theme.spacing(1),
    minWidth: 120,
  },
  icon: {
    marginRight: '20px',
},
}));

export default function SignIn() {
  const classes = useStyles();

    const [state, setState] = React.useState({
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    const [age, setAge] = React.useState({});

    const handleAgeChange = (event) => {
      setAge(event.target.value);
    };
    const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  
    const { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday } = state;
    const error = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday].filter((v) => v).length !== 2;
  

  return (
    <>
    <Grid>
      <CssBaseline/>
      <AppBar position="absolute" variant="regular">
        <Toolbar>
          <SettingsIcon className={classes.icon}/>
          <Typography variant="h6">
            Account Preferences
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
    <Grid item xs={false} sm={4} md={7}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
       <Box mt={8}>
        <Avatar classname={classes.avatar} align="center">
          <AccessTimeIcon/>
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
            <div>
            <GetTime id="MonTime" checked={state.Monday}></GetTime>
            <GetGarage id="MonGarage" checked={state.Monday}></GetGarage>
            </div>

            <FormControlLabel
              control={<Checkbox checked={Tuesday} onChange={handleChange} name="Tuesday" />}
              label="Tuesday"
            />
            <div>
            <GetTime id="TuesTime" checked={state.Tuesday}></GetTime>
            <GetGarage id="TuesGarage" checked={state.Tuesday}></GetGarage>
            </div>

            <FormControlLabel
              control={<Checkbox checked={Wednesday} onChange={handleChange} name="Wednesday" />}
              label="Wednesday"
            />
            <div>
            <GetTime id="WedTime" checked={state.Wednesday}></GetTime>
            <GetGarage id="WedGarage" checked={state.Wednesday}></GetGarage>
            </div>

            <FormControlLabel
              control={<Checkbox checked={Thursday} onChange={handleChange} name="Thursday" />}
              label="Thursday"
            />
            <div>
            <GetTime id="ThursTime" checked={state.Thursday}></GetTime>
            <GetGarage id="ThursGarage" checked={state.Thursday}></GetGarage>
            </div>

            <FormControlLabel
              control={<Checkbox checked={Friday} onChange={handleChange} name="Friday" />}
              label="Friday"
            />
            <div>
            <GetTime id="FriTime" checked={state.Friday}></GetTime>
            <GetGarage id="FriGarage" checked={state.Friday}></GetGarage>
            </div>

            <FormControlLabel
              control={<Checkbox checked={Saturday} onChange={handleChange} name="Saturday" />}
              label="Saturday"
            />
            <div>
            <GetTime id="SatTime" checked={state.Saturday}></GetTime>
            <GetGarage id="SatGarage" checked={state.Saturday}></GetGarage>
            </div>

            <FormControlLabel
              control={<Checkbox checked={Sunday} onChange={handleChange} name="Sunday" />}
              label="Sunday"
            />
            <div>
            <GetTime id="SunTime" checked={state.Sunday}></GetTime>
            <GetGarage id="SunGarage" checked={state.Sunday}></GetGarage>
            </div>

          </FormGroup>
        </FormControl>
      </Container>
      <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save
            </Button>
    </Container>
    </Grid>
    <Grid>
      <Container>
        <Typography> Account Credentials </Typography>
        <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Change Password
        </Button>
      </Container>
    </Grid>
    <Grid>
      <Container>
        <Typography> Notifications </Typography>
        <FormGroup>
          <FormControlLabel control={<Switch> color="primary" size="Normal" checked={checked} onChange={toggleChecked} </Switch>} label ="Push Notifications"/>
        </FormGroup>
      </Container>
    </Grid>
    </>
  );
}