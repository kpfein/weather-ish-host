var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	app = express(),
	secrets = require("./secrets"),
	uristring = secrets.uristring;

	app.use(express.static(__dirname+"/public"));
	app.use(bodyParser.json());



	app.get("/api/forecastIOKey", function(req, res){ 
		return res.send(secrets.forecastIOKey);
	})

	//Connections
	app.listen(process.env.PORT, function(){
		console.log("listening");
	});

	mongoose.connect(uristring);
	mongoose.connection.once("open", function(){
		console.log("db connected");
	});