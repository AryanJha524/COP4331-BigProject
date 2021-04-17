import { Link, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';


export default function Reserve()
{
    const history = useHistory();
    
    return(
        <React.Fragment>
            <Typography>
                current garage reserved from user
                choose to reserve garage here!
            </Typography>
            <div>
                <Link href="#" variant="body2" onClick={() => history.push('/pref')}>
                    No garage chosen? Reserve a parking spot here.
                </Link>
            </div>
        </React.Fragment>
    )
}