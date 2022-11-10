const mongoose = require("mongoose") 
const engineSchema = mongoose.Schema({ 
    EngineType: String, 
    FuelType: String,
    Transmission:String, 
 Cylinders: Number 
}) 
 
module.exports = mongoose.model("engine", 
engineSchema) 