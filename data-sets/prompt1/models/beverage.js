const mongoose=require("mongoose");
const Schema =mongoose.Schema; 

const restaurantSchema=new Schema (
    {
        "beverage-name": String, 
                  brand: String, 
        'beverage-type': String, 
       'contains-sugar': {type: Boolean, default: false}, 
             carbonated: {type: Boolean, default: false}, 
             container: String 
    }
)

module.exports=Beverage; 