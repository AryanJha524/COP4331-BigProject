import React, { useEffect, useState, Component } from 'react';
import { AppBar, Toolbar, Button, Link, CssBaseline } from '@material-ui/core';
import { Collapse} from '@material-ui/core';
import history from './../history';
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import homeStyle from './homeStyle';

export default function Home()
{
    const classes = homeStyle();
    const [checked, setChecked] = useState(false);
    useEffect(()=>{
        setChecked(true);
    }, [])

    return (
        <div className = {classes.root}>
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

            <Collapse in={checked} {...(checked ? { timeout: 1000} : {})}
            collapsedHeight={50}>         
            <div className={classes.container}>
              <h1 className={classes.title}>
                  Welcome to Parky!
              </h1>
                 <Button variant="contained" size="large" className={classes.margin}
                  onClick={() => history.push('/register')}>
                     Register
                </Button>
                <Button variant="contained" size="large" className={classes.margin}
                onClick={() => history.push('/login')}>
                  Login
                </Button>
            </div>
            </Collapse>
        </div>

    );
}
