const mongoose = require("mongoose")
const Schema = mongoose.Schema
const workoutSchema = new Schema({
     day: new Date().setDate(new Date().getDate()-10),
        exercises: [
          {
            type: "resistance",
            name: "Bicep Curl",
            duration: 20,
            weight: 100,
            reps: 10,
            sets: 4
          }{
       
        ]
      
    day:   { type: Date, default: Date.now},
    exercises:  [
        {
        type: {type: String},
        name: {type: String},
        duration: {type: Number},
        weight: {type: Number},
        reps: {type: Number},
        sets: {type: Number},
        }
    ]
})


const Workout =    mongoose.model("Workout", workoutSchema)
module.exports = Workout 


