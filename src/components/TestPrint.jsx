import React, {useRef} from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {render} from 'react-dom'
import Print from './Print.jsx'


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



class TestPrint extends React.Component {
    render() {
      return(
        <div>
          <br/>
          <br/>
          <Typography variant="h4" gutterBottom>Print out Test Procedure</Typography>
          <br/>
          <Typography variant="body1" gutterBottom>Review and print</Typography>
                <TableContainer component={Paper} >
                <Table aria-label='leaderboard' >
                    <TableHead>
                        <TableRow>
                            <TableCell>Test ID</TableCell>
                            {this.props.testProcedure.map((item,index)=>{
                            return <TableCell key={index} align="left">{item.testId}</TableCell>
                          })}  
                        </TableRow>
                      
                    </TableHead>                     

                        <TableBody>
                            
                        {this.props.testProcedure.map((item,index)=>{
                        return <TableRow key={index}>
                            <TableCell component="th" scope="row">Test Description</TableCell>
                            <TableCell align="left">{item.testDescription}</TableCell> 
                        </TableRow>
                        })}                                                        
                    </TableBody>                      
                </Table>
            </TableContainer>  
            <Print/>
        </div>
        
      )
      
  }
  
}



  function mapStateToProps (state) {
    return {testProcedure: state.testProcedure};
  }
  
  function mapDispatchToProps (dispatch) {
    return {
      TestPrint: function (data) {
        dispatch(TestPrint(data))
      }
    }
  }
  var ConnectedTestPrint = connect(mapStateToProps, mapDispatchToProps)(TestPrint);
  console.log(ConnectedTestPrint)

  export default ConnectedTestPrint;
