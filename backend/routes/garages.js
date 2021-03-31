const router = require('express').Router();
const Garage = require('../models/Garage');



router.post('/createGarage', (req, res) => {
    const newGarage = new Garage({
        name: req.body.garageName,
        numberSpots: req.body.numberSpots,
        location: req.body.location,
        spotsArray: req.body.spotsArray
    });
    newGarage
    .save()
    .then(garage => res.status(200).json(garage))
    .catch(err => res.status(400).json(err));
}) 


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
                    const openSpot = {spot: spotsArray[i].spot};
                    return res.status(200).json({isFull: false}, openSpot);
                }
            }
            return res.status(200).json({isFull: true});
        }
        else {
            return res.status(200).json({error: "No garage found"});
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
            var spotNumber = req.body.spotNumber;

            if (spotNumber <= 0) {
                return res.status(200).json({err: "Invalid spot"})
            }
                
            garage.spotsArray[spotNumber - 1].isOpen = false;
            garage.save()
            .then(garage => res.status(200).json({success: "Spot updated!"}))
            .catch(err => res.status(200).json(err));                
            
        }
        else {
            return res.status(200).json({err: "No garage found"});
        }
    })
})




module.exports = router;