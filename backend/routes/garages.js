const router = require('express').Router();
const Garage = require('../models/Garage');


router.post('/createGarage', (req, res) => {
    const newGarage = new Garage({
        name: req.body.garageName,
        numberSpots: req.body.numberSpots,
        Geometry: req.body.GeoGarage,
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
                    return res.status(200).json({isFull: false});
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
            var spotLevel = req.body.level;
            var spotNumber = req.body.spotNumber;
            garage.updateOne({"spotsArray.level": spotLevel, "spotsArray.spot": spotNumber},
            {'$set': {
                    'spotsArray.$.isOpen': true
                }},
                function(err) {
                    if (err) {
                        return res.json(err);
                    }
                    else {
                        return res.status(200).json({message: "Spot updated"});
                    }
                })
        }
        else {
            return res.status(200).json({err: "No garage found"});
        }
    })
})

// isFindSpot api
router.post('/isFindSpot', (req, res) => {

    // find closest garage that isn't full
    // go through garage array, return object of first one that isnt full (call separate api)

    // go through all garages, call api to compare distances
    // order garages array by closest distance
    Garage.find(
        {
          location:
            {
                $near :
               {
                   $geometry: 
                   {
                       type: "Point",  
                       coordinates: [req.body.lng,req.body.lat]
                    },
                    $maxDistance: 100000
               }
            }
        }
     ).then(garage => res.status(200).json(garage))
      .catch(err => res.status(200).json(err));
});
module.exports = router;
