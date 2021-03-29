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


// works for existing users, not yet for non-existant usernames, need to fix
router.post('/parkUser', (req, res) => {
    const filter = {userName: req.body.userName};
    const update = {isParked: req.body.parkStatus};
    User.findOneAndUpdate(filter, update, {new: true})
    .then(user => {
        if (user) {
            return res.status(200).json(user);
        }
    })
    .catch(err => res.status(200).json(err));
})



module.exports = router;