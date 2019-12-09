const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

let app = express();

// view engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", `handlebars`); // ' " ` 
app.use(bodyParser.urlencoded({ extended: false }));

// public folder
app.use(express.static("public"));

// database
let dbLink = `mongodb://localhost/project`; // for future use
mongoose.connect(dbLink, { useNewUrlParser: true }, err => {
  if (err) console.log("err database");
  else {
    console.log("Connected database");
  }
});

let port = 6969; // for future use
app.listen(port, err => {
  if (err) console.log("err app listen: ", err);
  console.log(`App listen at ${port}`);
});

// set routers
const homerouter = require("./routers/homerouter");
const mainrouter = require("./routers/mainrouter")
app.use("/", mainrouter)

app.use("/", homerouter);
