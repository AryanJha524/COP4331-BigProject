import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Badge, Button, CssBaseline, AppBar, Toolbar, IconButton, Typography, Grid } from '@material-ui/core';
import AuthContext from './../Auth.js';
import NotificationsIcon from '@material-ui/icons/Notifications';
import fire from '../fire.js';
import Reserve from './../components/Reserve';
import GarageList from './../components/GarageList';
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import UserInfo from '../components/UserInfo';

const drawerWidth = 240;

const navbarStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // backgroundColor: 'gold',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/carLoginPic.jpg'})`,
    },

    toolbar: {
        paddingRight: 24,
    },

    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
          background: 'black',
          fontFamily: 'Roboto',
      },
    title: {
        flexGrow: 1,
    },
    drawingPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      fixedHeight: {
        height: 240,
      },
      appbarTitle:{
        flexGrow: '1', 
    },
    colorText: {
        color: '#fff',
    },
}));

export default function Dashboard(){
    const classes = navbarStyle();
    const [open, setOpen] = useState(true);

    const notifCount = 0;

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleSignOut = () => {
        fire.auth().signOut();
    };

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                      <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        logged in user's name
                      </Typography>
                      <h1 className={classes.appbarTitle}>
                        <span className={classes.colorText}>
                          Parky
                        </span>
                       <DriveEtaIcon className={classes.icon}/>
                     </h1>
                      <IconButton color="inherit">
                          <Badge badgeContent={notifCount} color="secondary">
                              <NotificationsIcon />
                          </Badge>
                      </IconButton>
                      <Button onClick={handleSignOut} color="inherit">
                          logout
                      </Button>
                </Toolbar>
            </AppBar>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>

            {/* user info */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <UserInfo />
              </Paper>
            </Grid>

            {/* reserve parking spot */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <Reserve />
              </Paper>
            </Grid>
            
            {/* garages and number of open spaces */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <GarageList />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>

        </div>
    )
}