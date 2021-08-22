import react from 'react';
import { connect } from 'react-redux';

//Material UI components
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import '../styles/leader-board.css'


// const useStyles = makeStyles({
//     table:{
//         minWidth: 650,
//     }
// })


// function //createData(testId, testDescription){
//     return{testId, testDescription}
// }

//update this in order to add on more rows
// const rows =[
//     createData('Density', "Get the density of a fluid using a 100mL graduated cylinder and hydrometer."),
//     createData('pH', "Get the pH of a fluid using a pH probe and 100mL beaker"),
// ]
   

//function HomePage(props){
class TestLibrary extends (react.Component){
    render(){
        return(
            <div>
                <br/><br/>
            <Typography variant="h4" gutterBottom>Test Library</Typography>
            <br/>
            <Typography variant="body1" gutterBottom>Click test below to access the test method.</Typography>
            <br/>
            {this.props.testProcedure.map((item,index)=>{
                return <TableContainer component={Paper} key={index}>
                <Table aria-label='leaderboard'>
                    <TableHead>
                        <TableRow>
                        <TableCell>Test ID</TableCell>
                        <TableCell align="right">Test Description</TableCell>
                        </TableRow>
                        </TableHead>                     

                        <TableBody>
                        <TableRow>
                        <TableCell component="th" scope="row" label={item.testId}></TableCell>
                        <TableCell align="right">{item.testDescription}</TableCell> 
                    </TableRow>
                </TableBody>                      
            </Table>
            </TableContainer>      
                })
            }
            </div> 
        )
    }  
}

function mapStateToProps (state) {
	return {testProcedure: state.testProcedure};
}

function mapDispatchToProps (dispatch) {
	return {
    TestLibrary: function (data) {
      dispatch(TestLibrary(data))
    }
  }
}

var ConnectedTestLibrary = connect(mapStateToProps, mapDispatchToProps)(TestLibrary);

export default ConnectedTestLibrary;