import React , { useState} from 'react';
import fire from './../fire.js';

export default VerifyEmail()
{
    const [email, setEmail] = useState('');
    const [verified, setVerified] = useState(false);

    var user = fire.auth().currentUser;

    if (!verified)
    {
        
        user.sendEmailVerification();
    }

}