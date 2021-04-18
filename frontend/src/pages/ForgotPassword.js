import React, { useRef, useState } from 'react';
import { Button, CssBaseline, Container, Typography, Grid, TextField, AppBar, Toolbar} from '@material-ui/core';
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import { Alert } from '@material-ui/lab'
import { useAuth } from '../Auth';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from "react-router-dom";
import fire, { auth } from './../fire.js';

const useStyles = makeStyles((theme) => ({
    root:{
      display: 'flex',
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      height: "100vh",
      color: 'white',
      minheight: '70vh',
      // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/carLoginPic.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      background: 'gold',

  },
  appbar:{
      background: 'black',
      fontFamily: 'Roboto',
  },
  wrapper: {
      width: '80%',
      margin: '0 auto',
  },
  appbarTitle:{
      flexGrow: '1', 
  },
  colorText: {
      color: '#fff',
  },
  title: {
      color: '#fff',
      fontSize: '4.5rem',
  },
  icon: {
    alignItems: 'center',
  },
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
  }));

export default function ForgotPassword()
{
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState(null);
    const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // const sendResetEmail = e => {
    //   e.preventDefault();
    //   auth.sendPasswordResetEmail(email)
    //   .then(() => {
    //     setEmailHasBeenSent(true);  
    //     setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
    //   })
    //   .catch(() => {
    //     setError("Error resetting password");
    //   });

    // };

    async function sendResetEmail(event)
    {
        event.preventDefault();
        console.log(email);

        try
        {
            setMessage("");
            setError("");
            setLoading(true);
            auth.sendPasswordResetEmail(email);
            setMessage("Check your inbox to reset your password");
        } catch {
            setError("Failed to reset Password");
        }
        setLoading(false);
    }

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.wrapper}>
                <h1 className={classes.appbarTitle}>
                    <span className={classes.colorText}>
                      Parky
                    </span>
                    <DriveEtaIcon className={classes.icon}/>
                </h1>
               </Toolbar> 
            </AppBar>
            <br/>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Password Reset
          </Typography>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={sendResetEmail}
            >
              Reset Password
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=>history.push('/login')}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" onClick={() => history.push('/register')}>
                  {"Don't have an account? Sign Up Here"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );   
}

