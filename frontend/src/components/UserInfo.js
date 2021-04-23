import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Link, Typography, Button, TextField, Container } from '@material-ui/core';
import fire, { auth } from './../fire.js';

const useStyles = makeStyles((theme) => ({
   
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


  
  
  export default function UserInfo()
  {
    const [password, setPassword] = React.useState(false);
    const [status, setStatus] = React.useState("");
    const classes = useStyles();
    var newPass = "";
    var confPass = "";
    
    const handleChange = e => {
      newPass = e.target.value;
    }
    
    const handleConfChange = e => {
      confPass = e.target.value;
    }
    
    function changePassword(pass)
    {
      auth.currentUser.updatePassword(pass).then(function() {
        console.log("Password Changed!");
        setStatus("Password changed successfully!");
        setPassword(false);
      }).catch(function(error) {
        console.log(error);
        setStatus(error.message);
      });
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
                fullWidth
                required
                onChange={handleChange}
                name="password"
                label="New Password"
                type="password"
                id="password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth 
                required
                onChange={handleConfChange}
                name="confPass"
                label="Confirm New Password"
                type="password"
                id="confPass"
              />
              {props.children}
                 </>
       ) : "";
   }

  function handleStatus()
  {
    if(newPass.length == 0 || confPass.length == 0)
    {
      setStatus("Must enter password in both fields!");
      return;
    }
    else if(newPass.localeCompare(confPass) != 0)
    {
      setStatus("Passwords mush match!");
      return;
    }
    changePassword(newPass);
    
    
        
  }

    var email = auth.currentUser.email;
    return(
        <>
            <Typography align='center' variant='h6'> Logged in as: {email}</Typography>
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
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleStatus()}
            >
              Save
            </Button>
          </Popup>
          <Typography>{status}</Typography>
          </Container>
          </>
    )
}