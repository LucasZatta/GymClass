import React, { useState, useEffect } from 'react';
import { Box, makeStyles, Typography, Grid, TextField,Toolbar, AppBar, Link, InputAdornment, Fab, Button, Dialog } from '@material-ui/core';
import { withRouter } from "react-router-dom";

const styles = makeStyles(() => ({
    root: {
        // backgroundColor: theme.palette.primary.main,
        
        backgroundSize: 'auto, auto, auto',
        minHeight: '93vh',
      },
      contentRoot: {
        paddingTop: 22,
        padding: 18,
        color: '#fff',
        height: 250,
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
          fontSize: 10,
          fontWeight: 550,
          color: "#7a1d8c"
      }
      
}))
const NavBar = (props) => {
    const classes = styles()
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    return(
        <>
         <Box className={classes.root}>
         <Button variant="contained" alignContent="flex-end" onClick={handleClickOpen}> Entrar </Button>
             <Dialog open={open} onClose={handleClose}>
       
                <Box className={classes.contentRoot}>
                <Grid container direction='column' spacing={4} justifyContent='center'>
                    <Grid item>
                        <TextField label="CPF:"/>
                    </Grid>
                    <Grid item>
                        <TextField type="password" label="Senha:"/>
                    </Grid>
                    <Grid item>
                        <Button variant="contained"> Entrar </Button>
                    </Grid>
                </Grid>
            </Box>
            </Dialog>
         </Box>
       
        </>
    )
}

export default NavBar;