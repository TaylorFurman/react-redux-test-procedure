import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'


import React from 'react';
import '../styles/navbar.css'

const MyLink = props => <Link to={window.location.href = 'https://github.com/TaylorFurman/react-redux-test-procedure'} {...props} />

//Need to figure out why this constantly redirects when put into the tool bar
//<Grid item><Typography variant='h4' noWrap><Link href={window.location.href = 'https://github.com/TaylorFurman/react-redux-test-procedure'} onClick={preventDefault}>Github Repo</Link></Typography></Grid>//
function NavBar(props){
  const preventDefault = (event) => event.preventDefault();
  return(
    <div className="navBar">
        <AppBar position = 'relative'>
            <Toolbar>
                <Grid container spacing={10} direction="row" justifyContent="center" alignItems="center">
                    <Grid item><Link to="/" style={{textDecoration: 'none', color: "white"}}> <Typography variant='h4' noWrap>Test Library</Typography></Link></Grid> 
                    <Grid item><Link to="/customtest" style={{textDecoration: 'none', color: "white"}}><Typography variant='h4' noWrap>New Test Procedure</Typography></Link></Grid>
                   
                </Grid>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar;