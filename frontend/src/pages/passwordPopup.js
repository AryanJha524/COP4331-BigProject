import React from 'react';
import useStyles from './styles';
import {Button} from '@material-ui/core';

function Popup(props) {
   const classes = useStyles();
    return (props.trigger) ? (
        <>
                <Button type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit} 
              onClick={()=> props.setTrigger(false)}> Cancel</Button>
              <>
                {props.children}
                </>
                </>
    ) : "";
}

export default Popup;