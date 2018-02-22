const mongoose = require('mongoose');
const {Schema} = mongoose;

const googleSchema = new Schema({
    googleID: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('google', googleSchema);