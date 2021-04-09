import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';

export default function UserInfo()
{

    return(
        <div>
            <Typography> User Info: email@emailaddress.com</Typography>
            <Link href="#" variant="body2">
                  {"Change user info"}
                </Link>
        </div>
    )
}