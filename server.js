var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000


var mongoose = require("mongoose")
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

var apiRoutes = require("./routes/apiRoutes")
apiRoutes(app)

var htmlRoutes = require("./routes/htmlRoutes")
htmlRoutes(app)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts")
app.listen(PORT, function(){
    console.log("App is listening on http://localhost:" + PORT)
})