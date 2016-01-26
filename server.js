var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	app = express(),
	port = 8080,
	secrets = require("./secrets"),
	uristring = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/weatherish';

	app.use(express.static(__dirname+"/public"));
	app.use(bodyParser.json());













	app.get("/api/forecastIOKey", function(req, res){ 
		return res.send(secrets.forecastIOKey);
	})




	//Connections
	app.listen(process.env.PORT || port, function(){
		console.log("listening on port: ", port);
	});

	mongoose.connect(uristring);
	mongoose.connection.once("open", function(){
		console.log("db connected");
	});