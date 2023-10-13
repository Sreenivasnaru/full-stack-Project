const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/1Z2niiBPg5A",
        set: (v) => v ==="" ? "https://unsplash.com/photos/1Z2niiBPg5A" : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
        type: Schema.Types.ObjectId,
        ref: "Review",
        },
    ]
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;