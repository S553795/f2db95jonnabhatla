const mongoose = require("mongoose")
const engineSchema = mongoose.Schema({
    EngineType: {
        type: String,
        required:true,
    },
    FuelType:{
        type: String,
        required:true,
        enum:['Electric','Gas','Petrol','Diesel'],
    },
    Transmission: {
        type: String,
        required:true,
    },
    Cylinders: {
        type: Number,
        required:true,
        min:0,
        max:5
    }
})

module.exports = mongoose.model("engine",
    engineSchema) 