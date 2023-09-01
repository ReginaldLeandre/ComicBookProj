const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
    characterId: String,
    name: {type: String,
         required: true},
    description: String,
    image: String 
}, {
    timestamps: true
})

module.exports = mongoose.model('Character', characterSchema)