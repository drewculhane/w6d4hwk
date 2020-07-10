const mongoose=require("mongoose");
const { Timestamp } = require("bson");
const Schema =mongoose.Schema;
const commentSchema=new Schema (
    {
        "username": String, 
        "content": String 
    }
)
const tweetSchema=new Schema (
        {
            "content": String, 
            "favorites": Number, 
            "comments": [commentSchema]
            }
)

const superSchema=new Schema (
 {
    "name": String, 
    "username": String,
    "tweets": [tweetSchema]
        }
)

module.exports=Tweets; 