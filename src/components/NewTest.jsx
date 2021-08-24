import react from 'react';
import {connect} from 'react-redux'

//Material UI
import TextField from '@material-ui/core/TextField'
//import { makeStyles } from '@material-ui/core/styles';
// import AddIcon from '@material-ui/icons/Add';
// import Fab from '@material-ui/core/Fab';
// import Tooltip from '@material-ui/core/Tooltip';
// import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//Redux
import {addTest} from '../redux/actions.js'


//Control the styling of the material UI components
// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '50ch',
//       },
//     },
//     fab: {
//         margin: theme.spacing(2),
//         width: "5ch",
//         height: "5ch"
//       },
//     absolute: {
//     position: 'absolute',
//     bottom: theme.spacing(1),
//     right: theme.spacing(0),
//     },
//   }));

//What happens when you click the delete icon on the Chip
// const handleDelete = () => {
// console.info('You clicked the delete icon.');
// };

//What is actually rendered on the screen
//export default function NewTest(props){
class AddTest extends (react.Component){
  constructor(props){
    super (props);
    this.state = {testId:'', testDescription:''}
  }
    
handleSubmit(event) {
  console.log(event);
  event.preventDefault();

  if (!this.state.testId && !this.state.testDescription ) {
    alert('Stop being stupid!!');
  } else {
    this.props.addTest({id: this.state.id, testId: this.state.testId, testDescription: this.state.testDescription});
    this.setState({testId: '', testDescription: ''});
  }
}

updateTestId(event) {
  this.setState({id: this.state.id})
  this.setState({testId: event.target.value});
}
updateTestDescription(event) {
  this.setState({testDescription: event.target.value});
}


render(){
  return(
    <div>
        <br/>
        <br/>
    <Typography variant="h4" gutterBottom>New Test Procedure</Typography>
    <br/>
    <Typography variant="body1" gutterBottom>Fill out all items below than click submit when completed.</Typography>
    <br/>
    {/*Start of the form area */}
    <form onSubmit={(e) => this.handleSubmit(e)} noValidate autoComplete="off">
      <TextField id="standard-required" value={this.state.testId} onChange={(e) => this.updateTestId(e)} label="Test ID" defaultValue=""/>
      <br/>
      <TextField id="standard-multiline-flexible" value={this.state.testDescription} onChange={(e) => this.updateTestDescription(e)} label="Test Description" multiline maxRows={4} />
      <br/><br/>
      {/*Insert data from hold.txt here */}
      <Button type="submit" variant="contained" color="primary">Add to Library</Button>
    </form>
    </div>
)
}
   
}
function mapStateToProps (state) {
	return {};
}

function mapDispatchToProps (dispatch) {
	return {
    addTest: function (data) {
      dispatch(addTest(data))
    }
  }
}

var ConnectedAddItem = connect(mapStateToProps, mapDispatchToProps)(AddTest);
export default ConnectedAddItem;