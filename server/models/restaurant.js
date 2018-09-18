
const mongoose = require('mongoose');
let ForeignKey = mongoose.Schema.Types.ObjectId;

var Rest = mongoose.model('Rest', new mongoose.Schema({
    name: { type: String, default: '', required: [true, "name is required"], minlength: [3, "name must be at least 3 characters"] },
    cuisine: { type: String, default: '', required: [true, "Cuisine is required"], minlength: [3, "Cuisine must be at least 3 characters"] },
    reviews: [{
        type: ForeignKey,
        ref: "Review" 
    }],
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }}));

module.exports = Rest;   