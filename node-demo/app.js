var express = require("express");
var app = express();
var port = 3000;

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo",{useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect("mongodb://localhost:27017/node-demo");

var nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
  console.log("entering root request handler");
  res.sendFile(__dirname + "/frontend/index.html");
  res.send('Are you happy?')
  res.send("Really happy?")
});

app.post("/addname", (req, res) => {
  console.log("entering post /addname")
  debugger
  var myData = new User(req.body);
  console.log(myData)
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.sendStatus(400).send("unable to save to database");
    });
      res.sendFile(__dirname + "/frontend/index.html");
});

app.listen(port, () => {
  console.log("Starting server...");
  console.log("Server listening to port " + port);
});
