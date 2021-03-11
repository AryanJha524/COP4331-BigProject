const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GarageSchema = new Schema({
    spotsCount: {
        type: Number,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [emailRegex]
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = Garage = mongoose.model("garage", GarageSchema);