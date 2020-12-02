import React, { useState } from 'react';
import { Box, makeStyles, Typography, Grid, TextField, Link, InputAdornment, Fab } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import NavBar from "../component/NavBar"

const styles = makeStyles(() => ({
    root: {
        // backgroundColor: theme.palette.primary.main,
        
        backgroundSize: 'auto, auto, auto',
        minHeight: '93vh',
      },
      contentRoot: {
        paddingTop: 22,
        padding: 18,
        color: '#fff'
      },
      homeText: {
        fontSize: 32,
      },
      homeForm: {
        paddingTop: 2,
      },
      inputRoot: {
        width: '100%',
        marginTop: 30
      },
      input: {
        color: "#fff",
      },
      grow: {
        flexGrow: 1
      },
      dialogContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: '#fff',
      },
      searchButtonContainer: {
        marginTop: 30
      }
}))
const Home = (props) => {
    const classes = styles()

    return(
        <>
        <Box className={classes.root}>
            <NavBar />
            <Box className={classes.contentRoot}>
                INSIDE HOMEAPP
            </Box>
            
        </Box>
        </>
    )
}

export default Home;