import React from 'react'
import { connect } from 'react-redux';

class TestPrint extends React.Component {
    render() {
      return <h1>Hello,</h1> 
        {this.props.testProcedure.map((item,index)=>{
                return <div key={index}>{item.testId}</div>
            })
            }
  }
}

  export default TestPrint;

  function mapStateToProps (state) {
	return {};
}