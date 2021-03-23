import React from 'react';
import {Container, TextField, Typography} from '@material-ui/core';
import '../App.css';


export default function LoginPage()
{
    return (
        <Container fluid maxWidth = "sm" style={{ backgroundColor: '#F8C615'}}>
            <Typography component="div">
            
                <header className="Login Here">
                    <h1>Login here</h1>
                </header>
                <form>
                    <TextField required id="outlined-basic" label="Username" variant="outlined"/>
                    <TextField required id="outlined-password-input" label="Password" variant="outlined"/>
                </form>
            </Typography>
           
        </Container>
    );
}