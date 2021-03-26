import React from 'react';
import {Avatar, Button, CssBaseline, TextField, 
  FormControlLabel, Checkbox, Link, 
  Paper, Box, Grid, Typography, AppBar, Toolbar, Container
} from '@material-ui/core';
import DriveEtaIcon from '@material-ui/icons/DriveEta'

//import Image from '@material-ui/core/Image';
import useStyles from './styles'

export default function RegisterPage() {
  const classes = useStyles();
  
  return (
      <>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" variant="regular">
            <Toolbar>
                <DriveEtaIcon className={classes.icon}/>
                <Typography variant="h6">
                    Parky Registration
                </Typography>
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
            Please Log in
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
              id="email"
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
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Register here"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              {/* <Copyright /> */}
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </>
  );
}