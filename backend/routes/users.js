const router = require('express').Router();
const User = require('../models/User');


router.post('/create', (req, res) => {
    // check if this username already exists
    User.findOne({userName: req.body.userName})
    .then(user => {
        if (user) {
            return res.status(200).json({error: "username already exists"})
        }
        else {
            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userName: req.body.userName,
                isParked: false
            })
            .save()
            .then(user => res.status(200).json(user))
            .catch(err => res.status(400).json(err));
        }
    })
})


module.exports = router;