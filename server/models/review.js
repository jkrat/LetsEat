const mongoose = require('mongoose');
let ForeignKey = mongoose.Schema.Types.ObjectId;

var Review = mongoose.model('Review', new mongoose.Schema({
    customer: { type: String, default: '', required: [true, "customer is required"], minlength: [3, "customer must be at least 3 characters"] },
    content: { type: String, default: '', required: [true, "content is required"], minlength: [3, "content must be at least 3 characters"] },
    rest: {
        type: ForeignKey,
        ref: "Rest"
    },
    stars: {type: Number, min: [1, "choose between 1 and 5 stars"], max: [5, "choose between 1 and 5 stars"]  }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }}));

module.exports = Review;   