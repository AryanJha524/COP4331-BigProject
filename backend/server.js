const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// allows us to parse incoming body requests 
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json());


/*
Include routes for different endpoints here
    ex) app.use('/users', usersRouter); // userRouter is imported from routes folder
*/


const database = require("./config/keys").mongoURI;

mongoose.connect(
    database,
    {useNewUrlParser: true}
)
.then(() => console.log("Connected to database successfully"))
.catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));