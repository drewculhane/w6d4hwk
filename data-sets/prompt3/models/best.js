const mongoose=require("mongoose");
const { Timestamp } = require("bson");
const Schema =mongoose.Schema; 
const bestSchema=new Schema (
    {
        "year": Number, 
        "sports": {
            "superBowl": String,
            "worldSeries": String,
            "stanleyCup": String,
            "NBAchampionship": String, 
        },
        "music": {
            "bestSong": {
                "title": String, 
                "artist": String, 
            }
        },
        "movies": {
            "bestMovie": String,
            "bestActress": String,
            "bestActor": String 
        }
    }
)
module.exports=Best; 
