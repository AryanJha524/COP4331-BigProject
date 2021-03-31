const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// need to find better address regex.
const addressRegex = /A-Za-z0-9'\.\-\s\,/;

const GeoGarage = new Schema({
    type:{
        type: String,
        default: "Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
})
const GarageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    numberSpots: {
        type: Number,
        required: true
    },
<<<<<<< HEAD
    Geometry : GeoGarage,
    // each element in this array represents a spot object.
    // a spot object contains the level (floor), number, and whether or not it is open
    spotsArray: [{ 
=======
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
>>>>>>> 47b3d31675dba327b2398f1e143af1ebf575bd6f
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