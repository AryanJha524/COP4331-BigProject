import React, { useContext, useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import fire from '../fire.js';
import RegisterPage from './RegisterPage';
import { AppBar, Toolbar } from '@material-ui/core';
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import loginStyle from './loginStyle';
import { AuthContext } from './../Auth.js';
import { useHistory } from 'react-router-dom'

// the login page
export default function LoginPage(){
  // login page styling
  const classes = loginStyle();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberme, setRememberMe] = useState(false);

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  }
  
  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  }
  
  // does the logging in
  const handleLogin = useCallback(async event => {
    event.preventDefault();
    // const {email, password} = event.target.elements;
    try{
      await fire
      .auth()
      .signInWithEmailAndPassword(email.current.value, password.current.value);
      history.push("/dashboard");
    } catch (error) {
      alert(error);
    }
    }, [history]
  );


    const { loggedInUser } = useContext(AuthContext);

    if (loggedInUser) {
      return<Redirect to="/dashboard" />;
    }

 

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appbar} position="absolute" variant="regular">
        <Toolbar>
          <DriveEtaIcon className={classes.icon}/>
          <Typography variant="h6">
            Parky Sign In
          </Typography>
          <Button className={classes.homeButton} onClick={() => history.push('/')} color="inherit">
          {"Home"}
          </Button>
        </Toolbar>
      </AppBar>
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <Typography align="center" component="h1" variant="h1">
            <br/>Welcome back to parky!
        </Typography>
      </Grid>
      
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Please Log in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={(email) => setEmail(email)}
              label="Email Address"
              name="email"
              autoComplete="email"
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
              onChange={(password) => setPassword(password)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value={rememberme} color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick = {handleLogin}
              className={classes.submit}
            >
              Log In
            </Button>
  

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={() => history.push('/forgot-password')}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
              <Link href="#" variant="body2" 
                onClick={() => history.push('/register')}>
                  {"Don't have an account? Register here"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

