import React, { useCallback, useState } from 'react';
import {Avatar, Button, CssBaseline, TextField, 
  FormControlLabel, Checkbox, Link, 
  Paper, Box, Grid, Typography, AppBar, Toolbar, Container
} from '@material-ui/core';
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import registerStyle from './registerStyle';
import history from './../history';
import fire from '../fire.js';

const RegisterPage = ({history}) => {
  const classes = registerStyle();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  }
  
  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  }
  
  const handleSignUp = useCallback(async event =>{
    event.preventDefault();
    // const { email, password} = event.target.elements;

    try {
      await fire
        .auth()
        .createUserWithEmailAndPassword(email, password);
        history.push("/dashboard");
    } catch(error){
      alert(error)
    }
  }, [history]);
  
  return (
      <>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appbar} position="absolute" variant="regular">
            <Toolbar>
                <DriveEtaIcon className={classes.icon}/>
                <Typography variant="h6">
                    Parky Registration
                </Typography>
                <Button className={classes.homeButton} onClick={() => history.push('/')} color="inherit">
          {"Home"}
          </Button>
            </Toolbar>
        </AppBar>
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <Typography align ="center" component="h1" variant="h1">
            <br/>Create your Parky account
        </Typography>
      </Grid>
      
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Register Here
          </Typography>
          <form className={classes.form} noValidate>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fname"
              label="First Name"
              name="fname"
              autoComplete="First Name"
              autoFocus
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lname"
              label="Last Name"
              name="lname"
              autoComplete="Last Name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={email}
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleEmail}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={handlePassword}
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Confpassword"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSignUp}
            >
              Register!
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" 
                onClick={() => history.push('/login')}>
                  {"Already have an account? Log in here"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
    </>
  );
}

export default RegisterPage;