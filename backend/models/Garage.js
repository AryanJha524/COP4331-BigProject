const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GarageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    numberSpots: {
        type: Number,
        required: true
    },
    location : {
        type: {
            type: String
        },
        coordinates: [Number]
    },
    // each element in this array represents a spot object.
    // a spot object contains the level (floor), number, and whether or not it is open
    spotsArray: [{ 
        spot: {
            type: String,
            required: true
        },
        isOpen: {
            type: Boolean,
            required: true
        }
    }
    ]
})

GarageSchema.index({"location" : "2dsphere"});


module.exports = Garage = mongoose.model("Garages", GarageSchema);