//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const port = 3000;

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/signup.html');// You can replace this with your desired response or HTML rendering
});

app.post("/", function(req, res){
	var firstName = req.body.fName;
	var lastName = req.body.lName;
	var email = req.body.email;

	console.log(firstName, lastName, email);
});

app.listen(port, function(){
	console.log("Server is up and running at https://localhost:${port}");
})