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

module.exports = User = mongoose.model("user", UserSchema);