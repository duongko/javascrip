const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
    title: String,
    img: String,
    price: Number,
    size: Array,
})


module.exports = mongoose.model("product", schema)