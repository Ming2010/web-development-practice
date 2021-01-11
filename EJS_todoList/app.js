
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

var items = [];
var workItems = [];

app.get("/", function(req, res){

	var day = date.getDate();
	res.render("list", {listTitle: day, newItems: items});

});


app.post("/", function(req, res){

	var item = req.body.newItem;

	if (req.body.list === "Work") {
		workItems.push(item);
		res.redirect("/work");
	} else {
		items.push(item);
		res.redirect("/");
	};

});

app.get("/work", function(req, res){

	res.render("list", {listTitle: "Work List", newItems: workItems});

});


app.get("/about", function(req, res){

	res.render("about");

});


app.listen(3000, function() {
	console.log("The server is listening on port 3000");
})




