const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// importing routers 
const garageRouter = require('../backend/routes/garages');
const userRouter = require('../backend/routes/users');

const app = express();
app.use(cors());

// allows us to parse incoming body requests 
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json());




const database = require("./config/keys").mongoURI;

mongoose.connect(
    database,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
)
.then(() => console.log("Connected to database successfully"))
.catch(err => console.log(err));

/*
Include routes for different endpoints here
    ex) app.use('/users', usersRouter); // userRouter is imported from routes folder
*/
app.use('/garages', garageRouter);
app.use('/users', userRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));