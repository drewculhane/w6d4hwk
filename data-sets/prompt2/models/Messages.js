const mongoose=require("mongoose");
const { Timestamp } = require("bson");
const Schema =mongoose.Schema; 

const messagesSchema=new Schema (
    {
                     "to": String, 
                   "from": String, 
                'message': String, 
    }, 
    { timestamps: true}
)

module.exports=Messages; 