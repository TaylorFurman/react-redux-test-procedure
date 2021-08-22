import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'


import React from 'react';
import '../styles/navbar.css'

function NavBar(props){
  return(
    <div className="navBar">
        <AppBar position = 'relative'>
            <Toolbar>
                <Grid container spacing={10} direction="row" justifyContent="center" alignItems="center">
                    <Grid item><Link to="/" style={{textDecoration: 'none', color: "white"}}> <Typography variant='h4' noWrap>Test Library</Typography></Link></Grid>                   
                    <Grid item><Link to="/newtest" style={{textDecoration: 'none', color: "white"}}><Typography variant='h4' noWrap>New Test</Typography></Link></Grid>
                    <Grid item><Typography variant='h4' noWrap><a style={{textDecoration: 'none', color: "white"}} href = 'https://github.com/TaylorFurman/react-redux-test-procedure'>Github Repo</a></Typography></Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar;