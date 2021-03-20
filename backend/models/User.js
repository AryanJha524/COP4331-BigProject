const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    isParked: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = User = mongoose.model("user", UserSchema);