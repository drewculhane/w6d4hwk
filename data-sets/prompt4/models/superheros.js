const mongoose=require("mongoose");
const { Timestamp } = require("bson");
const Schema =mongoose.Schema;
const characSchema=new Schema (
    {
        "name": String,
        "alias": Boolean, 
        "actor": String 
    }
)
const moviesSchema=new Schema(
    {
        "title": String, 
        "year": Number, 
        "characters": [characSchema]
    }
)
const superSchema=new Schema (
    {
        "universe": String, 
        "movies": [moviesSchema]
    }
    )
module.exports=Superheros; 