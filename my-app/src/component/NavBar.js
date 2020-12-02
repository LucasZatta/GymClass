import React, { useState } from 'react';
import { Box, makeStyles, Typography, Grid, TextField,Toolbar, AppBar, Link, InputAdornment, Fab, Button } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import LoginModal from "./LoginModal"

const styles = makeStyles(() => ({
    root: {
        backgroundColor: '#fff',
        height: 54,
      },
      rootExtended: {
        backgroundColor: '#fff',
        height: 129
      },
      logo: {
        lineHeight: 0.6
      },
      profileContainer: {
        textAlign: 'right'
      },
      extendedToolbar: {
        borderTop: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      linkListRoot: {
        fontSize: 16,
        color: "#34363A",
        '& > * + *': {
          marginLeft: 2,
        },
      },
      toolbar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      content: {
        width: "1500px"
      },
      title: {
          fontFamily: "Rubik, Arial, Helvetica, sans-serif",
          fontSize: 30,
          fontWeight: 550,
          color: "#7a1d8c",
          letterSpacing: 5
      }
      
}))
const NavBar = (props) => {
    const classes = styles()
    // useEffect(() => {
    //     props.changeUser;
    // },[])



    return(
        <>
        <Box className={classes.root}>
            <Box className={classes.contentRoot}>
                <AppBar position="fixed" color="inherit">
                    <Toolbar disableGutters className={classes.tollbar}>
                        <Box className={classes.content}>
                            <Grid container>
                                <Grid item md={10}>
                                    <Typography className={classes.title} style={{paddingLeft: 40}}>Fit<span className={classes.title} style={{letterSpacing: -4, color:"#d4872f"}}> Space</span></Typography>
                                </Grid>
                                <Grid item md={2} alignContent="flex-end" alignItems="flex-end" justifyContent="flex-end">
                                   <LoginModal />
                                </Grid>
                            </Grid>
                        </Box>
                    </Toolbar>
                </AppBar>
               
            </Box>
            
        </Box>
        </>
    )
}

export default NavBar;