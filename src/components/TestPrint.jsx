import React from 'react'
import { connect } from 'react-redux';
import NavBar from './NavBar.jsx'

class TestPrint extends React.Component {
    render() {
      
      
      return (
        <h1>Hello,</h1> 
        

      )
      
  }
}

  export default TestPrint;

  function mapStateToProps (state) {
	return {};
}

// {this.props.testProcedure.map((item,index)=>{
//   return <div key={index}>{item.testId}</div>
//   })
//   }