import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import '../styles/leader-board.css'


const useStyles = makeStyles({
    table:{
        minWidth: 650,
    }
})


function createData(test, description){
    return{test, description}
}

//update this in order to add on more rows
const rows =[
    createData('Density', "Get the density of a fluid using a 100mL graduated cylinder and hydrometer."),
    createData('pH', "Get the pH of a fluid using a pH probe and 100mL beaker"),
]
   

function HomePage(props){
    const classes = useStyles();
    return(
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='leaderboard'>
                <TableHead>
                    <TableRow>
                        <TableCell>Test ID</TableCell>
                        <TableCell align="right">Test Description</TableCell>
                    </TableRow>
                </TableHead>   
                <TableBody>
                {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">{row.test}</TableCell>
                        <TableCell align="right">{row.description}</TableCell>
                        
                        </TableRow>
                    ))}
                </TableBody>    
            </Table>
        </TableContainer>
        
    )
}

export default HomePage;