const mongoose = require('mongoose'); 

const CategorySchema = new mongoose.Schema(
    {
       name: { 
        type:String, 
        required: true
        }
    },
    {timestanmps: true} //creates updated and added times.
);

module.exports = mongoose.model("Category", CategorySchema);