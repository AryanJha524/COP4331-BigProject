import React from 'react';
import useStyles from './../pages/styles';
import {Button} from '@material-ui/core';

function Popup(props) {
   const classes = useStyles();
    return (props.trigger) ? (
        <div className={classes.Popup}>
            <div className={classes.popupInner}>
                <Button type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit} onClick={()=> props.setTrigger(false)}> Cancel</Button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;