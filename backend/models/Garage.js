const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// need to find better address regex.
const addressRegex = /A-Za-z0-9'\.\-\s\,/;


const GarageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    numberSpots: {
        type: Number,
        required: true
    },
    location: {
        latitude: {
            type: String,
            required: true
        },
        longitude: {
            type: String,
            required: true
        },
    },
    // each element in this array represents a spot object.
    // a spot object contains the spot number whether or not it is open
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
    ],
})

module.exports = Garage = mongoose.model("Garages", GarageSchema);