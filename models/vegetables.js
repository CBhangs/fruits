const mongoose = require('mongoose');

const vegetablesSchema = new mongoose.Schema({
    name: String,
    color: String,
    readyToEat: Boolean
})
const Veggie = mongoose.model('Veggie', vegetablesSchema)

module.exports = Veggie;