const mongoose = require('mongoose')
const memorySchema = new mongoose.Schema({
    name : String,
    email: String,
    score : Number

});

const Memory = mongoose.model('Memory' , memorySchema);
module.exports = Memory