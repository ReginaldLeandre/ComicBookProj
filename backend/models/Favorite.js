const mongoose = require('mongoose')

const favoriteSchema = new Schema( {
    favorite: String
);


module.exports = mongoose.model('Favorite', favoriteSchema)