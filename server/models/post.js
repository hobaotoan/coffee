const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    title: String,
    group:String,
    category:String,
    content:String,
    image:String,
    created:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Post',postSchema);