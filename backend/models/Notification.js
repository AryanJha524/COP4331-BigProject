const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    garage: {
        type: ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})