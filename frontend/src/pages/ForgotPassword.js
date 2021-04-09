import React, { useRef, useState } from 'react';
import { Button, CssBaseline, Container, Typography, Grid, TextField} from '@material-ui/core';
import { Alert } from '@material-ui/lab'
import { useAuth } from '../Auth';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from "react-router-dom";
import fire from './../fire.js';

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
  }));

export default function ForgotPassword()
{
    const classes = useStyles();
    const history = useHistory();
    const emailRef = useRef();
    //const { resetPassword } = useAuth();
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    function resetPassword(email)
    {
      return fire.auth().sendPasswordResetEmail(email);
    }

    async function handleSubmit(event)
    {
        event.preventDefault();

        try
        {
            setMessage("");
            setError("");
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage("Check your inbox to reset your password");
        } catch {
            setError("Failed to reset Password");
        }
        setLoading(false);
    }

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
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
              ref={emailRef}
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
              onClick={handleSubmit}
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

