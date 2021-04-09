import React, { useCallback, useState, useRef } from 'react';
import {Avatar, Button, CssBaseline, TextField, 
  FormControlLabel, Checkbox, Link, 
  Paper, Box, Grid, Typography, AppBar, Toolbar, Container
} from '@material-ui/core';
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import registerStyle from './registerStyle';
import fire from '../fire.js';
import history from './../history';

export default function RegisterPage(){
  const classes = registerStyle();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  // const handleEmail = (event) => {
  //   event.preventDefault();
  //   setEmail(event.target.value);
  // }
  
  // const handlePassword = (event) => {
  //   event.preventDefault();
  //   setPassword(event.target.value);
  // }

  // const handleConfirmPassword = (event) => {
  //   event.preventDefault();
  //   setConfirmPassword(event.target.value);
  // }
  
  // function verifyEmail()
  // {
  //   var user = fire.auth().currentUser;
  //   user.sendEmailVerification().then(function() {
  //       window.alert("email verification sent");
  //   }).catch(function(error){

  //   });
  // }

  // const handleSignUp = useCallback(async event =>{
  //   event.preventDefault();

  //   if (passwordRef.current.value != confirmPasswordRef.current.value)
  //     return setError('Passwords do not match');

  //   try {
  //     setError('');
  //     setLoading(true);
  //     await fire
  //       .auth()
  //       .createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
        
  //       // const user = fire.auth().currentUser;
  //       // await user.sendEmailVerification();
         
  //       history.push("/dashboard");
  //   } catch{
  //     setError('Failed to create Account');
  //   }
  //   setLoading(false);
  // }, [history]);

  async function handleSignUp(e)
  {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value)
    {
      return setError("Passwords do no match");
    }

    try {
      setError("");
      setLoading(true);
      await fire.auth().createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch{
      setError('Failed to create an account');
    }
      setLoading(false);
  }
  
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
              // value={email}
              label="Email Address"
              name="email"
              autoComplete="email"
              ref={emailRef}
              // onChange={handleEmail}
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
              ref={passwordRef}
              // value={password}
              // onChange={handlePassword}
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
              ref={confirmPasswordRef}
              //value={confirmPassword}
              // onChange={handleConfirmPassword}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
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
