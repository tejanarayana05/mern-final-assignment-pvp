const mongoose = require('mongoose')
const responseSchema = new mongoose.Schema({
    name : String,
    email: String,
    score : Number
});

const Response = mongoose.model('Response' , responseSchema);
module.exports = Response