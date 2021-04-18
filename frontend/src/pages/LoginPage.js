import React, { useContext, useState, useCallback, useRef } from 'react';
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
//import { AuthContext } from './../Auth.js';
import { useHistory } from 'react-router-dom';
import { auth } from './../fire';

// the login page
export default function LoginPage(){
  // login page styling
  const classes = loginStyle();
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  //const history = useHistory();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [rememberme, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEmail = (email) => {
    setEmail(email);
  }
  
  const handlePassword = (password) => {
    setPassword(password);
  }

    const handleLogin = (e) =>
    {
      e.preventDefault();
      console.log(email)
      console.log(password)

        setError("");
        setLoading(true);
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log(user)
          history.push("/dashboard");
          setError("Failed to login");
        setLoading(false);
        })     
      .catch((error) => console.log(error));
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
            {/* <Button
              className={classes.submit}
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={signInWithGoogle}
            >
              Sign In with Google
            </Button> */}
  

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

