import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel,
     Checkbox, Link, Grid, Box, Typography, Container, FormControl, FormLabel, FormGroup, FormHelperText, InputLabel,
     MenuItem, Select, AppBar, Toolbar, Switch, IconButton, Menu,
    } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { FormatListNumbered } from '@material-ui/icons';
import Popup from '../components/passwordPopup';



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
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    flexGrow: 1,
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
  toolbarButtons: {
    marginLeft: 'auto',
  },
  select: {
    width:'100%',
    maxWidth:600
  },
}));

export default function NewPref() {
  const classes = useStyles();

    const [state, setState] = React.useState({
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false,
    });

    const options =[
      {label: 'A', value: 'A'},
      {label: 'B', value: 'B'},
      {label: 'C', value: 'C'},
      {label: 'D', value: 'D'},
      {label: 'H', value: 'H'},
      {label: 'I', value: 'I'},
    ]
  
    const handleChange = (event) => {
      console.log("This day: " + event.target.name + " value is " + event.target.checked);
      console.log("State: " + state)
      if(event.target.checked === true)
      {
        //Save it to user and get garage & time
      }
      else
      {
        //Save it to user
      }
      setState({ ...state, [event.target.name]: event.target.checked });
    };
    const handleGarageChange = (event) => {
      console.log("This Garage: " + event.target.value + " On this day " + event.target.id);
      setValue(event.target.value);
    };

    const [garage, setGarage] = React.useState({});
    const [value, setValue] = React.useState('');
    const [monValue, setMonValue] = React.useState('');
    const [tueValue, setTueValue] = React.useState('');
    const [wedValue, setWedValue] = React.useState('');
    const [thuValue, setThuValue] = React.useState('');
    const [friValue, setFriValue] = React.useState('');
    const [satValue, setSatValue] = React.useState('');
    const [sunValue, setSunValue] = React.useState('');

    const [checked, setChecked] = React.useState(false);

    const [notifChecked, setNotifChecked] = React.useState(() => initNotif());

    const [password, setPassword] = React.useState(false);

    function toggleChecked(){
      setNotifChecked(!notifChecked);
    };
  
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/Home.js`; 
    history.push(path);
  }


    const { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday } = state;
    const { Sun, Mon, Tues, Wed, Thurs, Fri, Sat } = garage;
  
    function initNotif()
    {
      console.log("initNotif");
      return false;
    }

function GetTime(props) {
  const classes = useStyles();
  const isChecked = props.checked;
  const [day, setDay] = React.useState(false);
  // const { Sun, Mon, Tues, Wed, Thurs, Fri, Sat } = day;
  
  if(isChecked){
    // setDay(prevDay => !prevDay);
    console.log(day);
  console.log("This is props.id: " + props.id);
    return(
      <Container>
      <form className={classes.container} noValidate>
        <TextField
          id={props.id}
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
    );}
    else 
    return (<></>);
}

function getValue(day)
{
  switch(day) {
    case Monday:
      return monValue;
    case Tuesday:
      return tueValue;
    case Wednesday:
      return wedValue;
    case Thursday:
      return thuValue;
    case Friday:
      return friValue;
    case Saturday:
      return satValue;
    case Sunday:
      return sunValue;
  }
}


function GetGarage(props)
{
  const classes = useStyles();
  const isChecked = props.checked;
  
  if(isChecked){
    console.log("This is propsday in gg: " + props.day);
    return(
      <Container>
      <FormControl key={props.id} variant="outlined" className={classes.ageFormControl}>
        <InputLabel id="Garage">Prefered Garage</InputLabel>
        <Select
          labelId="Garage"
          id={props.id}
          label="Prefered Garage"
          value={value}
          onChange={handleGarageChange}
          options={options}
        >
          <MenuItem value=''><em>None</em></MenuItem>
          <MenuItem value={'A'}>Garage A</MenuItem>
          <MenuItem value={'B'}>Garage B</MenuItem>
          <MenuItem value={'C'}>Garage C</MenuItem>
          <MenuItem value={'D'}>Garage D</MenuItem>
          <MenuItem value={'H'}>Garage H</MenuItem>
          <MenuItem value={'I'}>Garage I</MenuItem>
        </Select>
      </FormControl>
      </Container>
  );}

  else
      return (<></>);
}

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
          <div className={classes.toolbarButtons}>
          <IconButton color="inherit" onClick={routeChange}>
            <HomeIcon/>
          </IconButton>
          </div>          
        </Toolbar>
      </AppBar>
    </Grid>
    <Grid container className={classes.root} spacing={2}>
    <Grid item xs={4} >
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
       <Box mt={8}>
        <Avatar className={classes.avatar} align="center">
          <AccessTimeIcon/>
        </Avatar>
      </Box>
      </div>
      <Container>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">What days do you come to campus?</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={state.Monday} onChange={handleChange} name="Monday" />}
              label="Monday"
            />
            <div>
            <GetTime id="MonTime" checked={state.Monday} day="Monday"></GetTime>
            <GetGarage id="MonGarage" checked={state.Monday} day="Monday"></GetGarage>
            </div>

            <FormControlLabel
              control={<Checkbox checked={state.Tuesday} onChange={handleChange} name="Tuesday" />}
              label="Tuesday"
            />
            <div>
            <GetTime id="TuesTime" checked={state.Tuesday} day="Tuesday"></GetTime>
            <GetGarage id="TuesGarage" checked={state.Tuesday} day="Tuesday"></GetGarage>
            </div>
            <FormControlLabel
              control={<Checkbox checked={state.Wednesday} onChange={handleChange} name="Wednesday" />}
              label="Wednesday"
            />
            <div>
            <GetTime id="WedTime" checked={state.Wednesday}></GetTime>
            <GetGarage id="WedGarage" checked={state.Wednesday}></GetGarage>
            </div>

            <FormControlLabel
              control={<Checkbox checked={state.Thursday} onChange={handleChange} name="Thursday" />}
              label="Thursday"
            />
            <div>
            <GetTime id="ThursTime" checked={state.Thursday}></GetTime>
            <GetGarage id="ThursGarage" checked={state.Thursday}></GetGarage>
            </div>

            <FormControlLabel
              control={<Checkbox checked={state.Friday} onChange={handleChange} name="Friday" />}
              label="Friday"
            />
            <div>
            <GetTime id="FriTime" checked={state.Friday}></GetTime>
            <GetGarage id="FriGarage" checked={state.Friday}></GetGarage>
            </div>

            <FormControlLabel
              control={<Checkbox checked={state.Saturday} onChange={handleChange} name="Saturday" />}
              label="Saturday"
            />
            <div>
            <GetTime id="SatTime" checked={state.Saturday}></GetTime>
            <GetGarage id="SatGarage" checked={state.Saturday}></GetGarage>
            </div>

            <FormControlLabel
              control={<Checkbox checked={state.Sunday} onChange={handleChange} name="Sunday" />}
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
    <Grid item xs={2}>
      <Container>
        <div className={classes.paper}>
          <Box mt={8}>
          <Avatar className={classes.avatar} align="center">
          <NotificationsActiveIcon/>
        </Avatar>
          <Typography> Account Credentials </Typography>
          <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={() => setPassword(true)}
                >
                  Change Password
          </Button>
        </Box>
        
        </div>
      </Container>
      
      <Popup trigger={password} setTrigger={setPassword}>
          <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="New Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Confirm New Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save
            </Button>
          </Popup>
    </Grid>
    <Grid item xs={4}>
      <Container>
        <div className={classes.paper}>
          <Box mt={8}>
          <Avatar className={classes.avatar} align="center">
          <AccountCircleIcon/>
        </Avatar>
        <Typography> Notifications </Typography>
        <FormGroup>
          <FormControlLabel control={<Switch color="primary" size="Normal" checked={notifChecked} onChange={toggleChecked} />} label ="Push Notifications"/>
        </FormGroup>
        </Box>
        </div>
      </Container>
    </Grid>
    </Grid>
    </>
  );
}