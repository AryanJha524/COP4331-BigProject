const router = require('express').Router();
const Garage = require('../models/Garage');

// isFull api
router.post('/isFull', (req, res) => {
    Garage.findOne({
        name: req.body.garageName
    })
    .then(garage => {
        if (garage) {
            var spotsArray = garage.spotsArray;
            for (i = 0; i < spotsArray.length; i++) {
                if (spotsArray[i].isOpen === true) {
                    return {isFull: false};
                }
            }
            return {isFull: true}
        }
        else {
            return {error: "No garage found"};
        }
    })
});


// isPark api 
router.post('/isPark', (req, res) => {
    Garage.findOne({
        name: req.body.garageName
    })
    .then(garage => {
        if (garage) {
            // update provided level and spot number in this garage's array
            var spotLevel = req.body.level;
            var spotNumber = req.body.spotNumber;
            garage.updateOne({"spotsArray.level": spotLevel, "spotsArray.spot": spotNumber},
            {'$set': {
                    'spotsArray.$.isOpen': false
                }},
                function(err, model) {
                    if (err) {
                        return res.json(err);
                    }
                }
            )
            return {message: "Spot updated"};
        }
        else {
            return {err: "No garage found"};
        }
    })
})



module.exports = router;