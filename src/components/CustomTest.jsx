import React from 'react';

//Material UI
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
    fab: {
        margin: theme.spacing(2),
        width: "5ch",
        height: "5ch"
      },
    absolute: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(0),
    },
  }));

const handleDelete = () => {
console.info('You clicked the delete icon.');
};


export default function CustomTest(props){
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return(
        <div>
            <br/>
            <br/>
        <Typography variant="h4" gutterBottom>New Test Procedure</Typography>
        <br/>
        <Typography variant="body1" gutterBottom>Please fill out all items below than click submit when completed.</Typography>
        <br/>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-required" label="Test ID" defaultValue=""/>
        <br/>
        <TextField
          id="standard-multiline-flexible"
          label="Test Description"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
        <br/>
        <TextField id="standard-search" label="Materials Needed" type="search" />

        <Tooltip title="Add" aria-label="add"><Fab color="primary" className={classes.fab}><AddIcon /></Fab></Tooltip>
        <br/>
        <Chip size="small" label="Deletable" onDelete={handleDelete} />


        </form>
        </div>
    )
}
