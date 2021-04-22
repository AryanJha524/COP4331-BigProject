import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Link, Typography, Button, TextField, Container } from '@material-ui/core';
import fire, { auth } from './../fire.js';

const useStyles = makeStyles((theme) => ({
   
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


function changePassword(newPass)
{
    auth.currentUser.updatePassword(newPass);
    setPassword(false);
}

function Popup(props) {
    const classes = useStyles();
     return (props.trigger) ? (
         <>
                 <Button type="submit"
               fullWidth
               variant="contained"
               color="primary"
               className={classes.submit} 
               onClick={()=> props.setTrigger(false)}> Cancel</Button>
               <TextField
              variant="outlined"
              margin="normal"
              fullWidth= {true}
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
               </>
     ) : "";
 }

export default function UserInfo()
{
    const classes = useStyles();
    var email = auth.currentUser.email;
    const [password, setPassword] = React.useState(false);
    return(
        <>
            <Typography> User Info: {email}</Typography>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => setPassword(true)}
            >
                Change Password
            </Button>
            <Container>
           <Popup trigger={password} setTrigger={setPassword}>
          <TextField
              variant="outlined"
              margin="normal"
              fullWidth= {true}
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
              onClick={changePassword()}
            >
              Save
            </Button>
          </Popup>
          </Container>
          </>
    )
}