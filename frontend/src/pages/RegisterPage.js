import React, { useCallback, useState, useRef } from 'react';
import {Avatar, Button, CssBaseline, TextField, 
  FormControlLabel, Checkbox, Link, 
  Paper, Box, Grid, Typography, AppBar, Toolbar, Container
} from '@material-ui/core';
import { Alert } from '@material-ui/lab'
import { withRouter } from 'react-router-dom';
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import registerStyle from './registerStyle';
import { auth, signInWithGoogle } from '../fire.js';
//import history from './../history';
import { useAuth } from './../Auth';
import { useHistory } from 'react-router-dom';

export default function RegisterPage(){
  const classes = registerStyle();
  const history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  
  // function verifyEmail(email)
  // {
  //   var user = auth.currentUser()
  //   user.sendEmailVerification().then(function() {
  //       window.alert("email verification sent to " + email);
  //   }).catch(function(error){

  //   });
  // }

  function handleSignUp(e)
  {
    e.preventDefault();
    console.log(email)
    console.log(password)

    if (password !== confirmPassword)
    {
      return setError("Passwords do not match");
    }
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    user.sendEmailVerification();
    alert("email sent to " + email);
    auth.signOut()
    console.log(user)
    history.push('/login')
  })
  .catch((error) => {console.log(error); setError(error.message)});
  }

  return (
      <>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appbar} elevation={0}>
      <Toolbar>
          <Typography className={classes.appbarTitle} variant="h6">
            Parky
            <DriveEtaIcon className={classes.icon}/>
            <span margin='auto'>Register</span>
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
          {message && <Alert variant="success">{message}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={email}
              label="Email Address"
              name="email"
              autoComplete="email"
              // ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password (At least 6 characters)"
              type="password"
              // ref={passwordRef}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              // ref={confirmPasswordRef}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              onClick={handleSignUp}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register!
            </Button>
            {/* <Button
              className={classes.submit}
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              //onClick={signInWithGoogle}
            >
              Sign In with Google
            </Button> */}
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

//export default withRouter(RegisterPage);
