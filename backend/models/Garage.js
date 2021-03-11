const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GarageSchema = new Schema({
    spotsCount: {
        type: Number,
        required: true
    },
    notifications: [{
        type: ObjectId,
        required: true
    }]
})

module.exports = Garage = mongoose.model("garage", GarageSchema);