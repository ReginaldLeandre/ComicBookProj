const mongoose = require('mongoose')


const purchaseHistorySchema = new Schema( {
    date:  {
        type: Date,
        default: null
    },
    price: {
        type: String,
        default: null
    },
    purchaseItems: {
        type: [Object],
        default: null
    }
);



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true},
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    likesDislikes: [String],

    purchaseHistory: [purchaseHistorySchema],
 
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)