const db = require("../models")
function apiRoutes(app) {
app.get("/api/workouts", function(req,res){
       db.Workout.find({}).then(function(data){
           res.json(data)
       })
})
app.get("/api/workouts/range", function(req,res){
    db.Workout.find({}).then(function(data){
        res.json(data)
    })
})

app.post("/api/workouts", function(req,res){
  
  var newWorkout = req.body
    db.Workout.create(newWorkout).then(function(data){
        res.json(data)
    })
})

app.put("/api/workouts/:id", function(req,res){
    var id = req.params.id
db.Workout.findOneAndUpdate(
        { _id: id }, 
        { $push: { exercises: req.body  } },
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log(success);
                 res.json(success)
             }
         });
     
})

}
module.exports = apiRoutes