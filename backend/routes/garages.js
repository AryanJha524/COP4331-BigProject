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
                    const openSpot = {spot: spotsArray[i].spot};
                    return res.status(200).json({isFull: false, openSpotNumber: spotsArray[i].spot});
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
router.post('/parkSpot', (req, res) => {
    Garage.findOne({
        name: req.body.garageName
    })
    .then(garage => {
        if (garage) {
            // update provided level and spot number in this garage's array
            var spotNumber = req.body.spotNumber;

            if (spotNumber <= 0) {
                return res.status(200).json({err: "Invalid spot"});
            }
            if (!garage.spotsArray[spotNumber - 1].isOpen) {
                return res.status(200).json({err: "Can't park here"});
            }    
            garage.spotsArray[spotNumber - 1].isOpen = false;
            garage.save()
            .then(garage => res.status(200).json({success: "Spot closed!"}))
            .catch(err => res.status(200).json(err));                
            
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
